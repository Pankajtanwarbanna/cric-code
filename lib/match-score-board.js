import CRICBUZZ from '../data/match.js';
import axios from 'axios';
import cheerio from 'cheerio';

const matchScoreBoard = async (slug) => {
    const all_matches = [];

    const match_url = CRICBUZZ.WEBSITE_URL + slug;

    const match = await axios({
        method: 'GET',
        url: match_url,
        headers: {}
    })

    let resp = cheerio.load(match.data);

    let title = resp("h4.ui-header").text();
    let update = resp("div.cbz-ui-status").text();
    let currentscore = resp('span.ui-bat-team-scores').text();
    let batsman = resp('span.bat-bowl-miniscore').eq(0).text();
    let batsmanrun = resp('td[class="cbz-grid-table-fix "]').eq(6).text();
    let ballsfaced = resp('span[style="font-weight:normal"]').eq(0).text();
    let fours = resp('td[class="cbz-grid-table-fix "]').eq(7).text();
    let sixes = resp('td[class="cbz-grid-table-fix "]').eq(8).text();
    let bowler = resp('span.bat-bowl-miniscore').eq(2).text();
    let bowlerover = resp('td[class="cbz-grid-table-fix "]').eq(21).text();
    let bowlerruns = resp('td[class="cbz-grid-table-fix "]').eq(23).text();
    let bowlerwickets = resp('td[class="cbz-grid-table-fix "]').eq(24).text();
    let partnership = resp("span[style='color:#333']").eq(0).text();
    let recentballs = resp("span[style='color:#333']").eq(2).text();
    let lastwicket = resp("span[style='color:#333']").eq(1).text();
    let runrate = resp("span[class='crr']").eq(0).text();

    let commentary = [];
    resp('div[id="paginationList"]').find("p[class='commtext']").each((index, element) => {
        if(resp(element).text().length > 0) {
            commentary.push(resp(element).text())
        }
    })

    let livescore = {
        title: title || '',
        update: update || '',
        current: currentscore || '',
        batsman: batsman || '',
        batsmanrun: batsmanrun || '',
        ballsfaced: ballsfaced || '',
        fours: fours || '',
        sixes: sixes || '',
        bowler: bowler || '',
        bowlerover: bowlerover || '',
        bowlerruns: bowlerruns || '',
        bowlerwickets: bowlerwickets || '',
        partnership: partnership || '',
        recentballs: recentballs || '',
        lastwicket: lastwicket || '',
        runrate: runrate || '',
        commentary: commentary || ''
    };

    return { match : livescore };
}

export default matchScoreBoard
