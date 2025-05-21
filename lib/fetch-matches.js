import CRICBUZZ from '../data/match.js';
import axios from 'axios';
import cheerio from 'cheerio';

const fetchMatches = async (type) => {
    const all_matches = [];

    const match_list = CRICBUZZ.MATCHES[type];
    const match_list_url = match_list.url;

    const matches = await axios({
        method: 'GET',
        url: match_list_url,
        headers: {}
    })

    let resp = cheerio.load(matches.data);

    // get all matches
    let typeOfMatches = [];
    resp('div.flex.flex-col.gap-2').children('div').each(function (index, element) {
        const matchContent = resp(element).html();
        if (matchContent.toString().includes('/cricket-series/')) {
            typeOfMatches.push({
                matchType: type,
                content: resp(element).html()
            });
        }
    })

    const $mainContainer = resp('div.flex.flex-col.gap-2');
    $mainContainer.children().each((i, seriesContainerElement) => {
        const $seriesContainer = resp(seriesContainerElement);
        const $seriesHeaderLink = $seriesContainer.find('a[title]').first();
        const seriesName = $seriesHeaderLink.find('span').text().trim();

        const $matchesListContainer = $seriesHeaderLink.next('div.flex.flex-col.gap-px');
        $matchesListContainer.find('a[href*="/live-cricket-scores/"]').each((j, matchLinkElement) => {
            const $matchLink = resp(matchLinkElement);
            const description = $matchLink.find('span.text-cbTxtSec').text().trim();

            const matchUrl = $matchLink.attr('href');

            let updates = [];

            const statusPreview = $matchLink.find('span.text-cbPreview').text().trim();
            if (statusPreview) {
                updates.push(statusPreview);
            }

            const $scoreBlock = $matchLink.find('div.flex.flex-col.gap-3.my-2').first();
            if ($scoreBlock.length > 0) {
                $scoreBlock.find('div.flex.items-center.gap-4.justify-between').each((k, teamRowElement) => {
                    const $teamRow = resp(teamRowElement);
                    const teamName = $teamRow.find('span.whitespace-nowrap').text().trim();
                    const score = $teamRow.find('span.font-medium, span.wb\\:font-semibold').text().trim();

                    if (teamName || score) {
                        updates.push(`${teamName} ${score}`.trim());
                    }
                });
            }

            const matchType = type.replace('_MATCHES', '');
            if (matchUrl && updates.length > 0) {
                all_matches.push({
                    title: description + ' - ' + seriesName,
                    matchType: matchType,
                    updates: updates,
                    matchUrl: matchUrl
                });
            }
        });
    });
    return { matches: all_matches };
}

export default fetchMatches
