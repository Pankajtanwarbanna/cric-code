import CRICBUZZ from '../data/match.js';
import axios from 'axios';
import cheerio from 'cheerio';

const matchScoreBoard = async (slug) => {
    const cleanedSlug = slug.startsWith('/') ? slug : `/${slug}`;
    const match_url = CRICBUZZ.WEBSITE_URL + cleanedSlug;

    console.log('Attempting to fetch match details from:', match_url);

    let livescore = {
        title: '',
        update: '',
        current: '',
        batsman: '',
        batsmanrun: '',
        ballsfaced: '',
        fours: '',
        sixes: '',
        bowler: '',
        bowlerover: '',
        bowlerruns: '',
        bowlerwickets: '',
        partnership: '',
        recentballs: '', // Changed to Recent Overs stat
        lastwicket: '',   // Changed to Last 10 overs stat
        runrate: '',
        commentary: []
    };

    try {
        const matchResponse = await axios({
            method: 'GET',
            url: match_url,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        });

        const $ = cheerio.load(matchResponse.data);

        livescore.title = $('title').text().trim();
        livescore.update = $('.text-cbTxtLive, .text-cbLive').first().text().trim();
        const $scoreElement = $('div.text-center.text-3xl, div.flex.flex-row.font-bold.text-xl div.flex').first();
        if ($scoreElement.length) {
            livescore.current = $scoreElement.text().replace('<!-- -->', '').trim();
        }

        const $batsmanRow = $('.scorecard-bat-grid a[title*="View Profile Of"]').first().closest('.scorecard-bat-grid');
        if ($batsmanRow.length) {
            livescore.batsman = $batsmanRow.find('> div, > span').first().text().replace(' * ', '').trim();
            livescore.batsmanrun = $batsmanRow.find('> div, > span').eq(1).text().trim();
            livescore.ballsfaced = $batsmanRow.find('> div, > span').eq(2).text().trim();
            livescore.fours = $batsmanRow.find('> div, > span').eq(3).text().trim();
            livescore.sixes = $batsmanRow.find('> div, > span').eq(4).text().trim();
        }


        const $bowlerSection = $('div.text-cbItmBkgDark:contains("Bowler")');
        const $bowlerRow = $bowlerSection.nextAll('.grid.scorecard-bat-grid').first(); // Find the first grid *after* the bowler header
        if ($bowlerRow.length) {
            livescore.bowler = $bowlerRow.find('> div, > span').first().text().replace(' * ', '').trim();
            livescore.bowlerover = $bowlerRow.find('> div, > span').eq(1).text().trim();
            livescore.bowlerruns = $bowlerRow.find('> div, > span').eq(3).text().trim();
            livescore.bowlerwickets = $bowlerRow.find('> div, > span').eq(4).text().trim();
        }

        const $partnershipElement = $('span.font-bold:contains("Partnership:")');
        if ($partnershipElement.length) {
            livescore.partnership = $partnershipElement.parent().text().replace('Partnership:', '').trim();
        }

        const $recentBallsLabel = $('p.text-\\[\\#666\\]:contains("Recent :")');
        if ($recentBallsLabel.length) {
            livescore.recentballs = $recentBallsLabel.next('p.text-\\[\\#666\\]').text().trim();
        } else {
            // Alternative: Find the recent overs summary in the over break block if available
            const $overBreakSummary = $('div.bg-cbLightGrayish .flex-col.w-full .flex.justify-between div:first-child').first();
            if ($overBreakSummary.length) {
                livescore.recentballs = $overBreakSummary.text().trim();
            }
        }

        const $last10OversElement = $('span.font-bold:contains("Last 10 overs")');
        if ($last10OversElement.length) {
            livescore.lastwicket = $last10OversElement.parent().text().trim().replace('Last 10 overs:', '').replace(':', '').trim();
        } else {
            // Fallback or different status
            // If no wickets, maybe indicate that? Or just leave empty.
            // Based on the provided HTML, a partnership exists and no wicket has fallen,
            // so a "last wicket" stat isn't relevant yet. Leave it as empty string if not found.
        }

        const $runRateElement = $('span.font-bold:contains("CRR:")').next('span');
        if ($runRateElement.length) {
            livescore.runrate = $runRateElement.text().trim();
        } else {
            // Check the alternative location in the main score block
            const $altRunRateElement = $('.text-cbTxtSec span.text-xs.font-normal').first();
            if ($altRunRateElement.length) {
                livescore.runrate = $altRunRateElement.text().trim();
            }
        }

        $('div.flex.gap-4, div.flex.gap-6').each((index, element) => {
            // The commentary text is in the second child div
            const commentaryText = $(element).find('> div:nth-child(2)').text().trim();
            if (commentaryText.length > 0) {
                livescore.commentary.push(commentaryText);
            }
        });

        $('div.bg-cbLightGrayish div.flex-col.w-full').each((index, element) => {
            const $overSummary = $(element);
            const summaryLine1 = $overSummary.find('.flex.justify-between div:first-child').text().trim();
            const summaryLine2 = $overSummary.find('.flex.justify-between div:last-child').text().trim();
            if (summaryLine1 || summaryLine2) {
                // Format the over summary nicely for the commentary list
                livescore.commentary.push(`Over Summary: ${summaryLine1} ${summaryLine2}`);
            }
        });


    } catch (error) {
        console.error('Error fetching match score board:', error);
        return { match: null, error: error.message };
    }

    return { match: livescore };
}

export default matchScoreBoard;