import CRICBUZZ from '../data/match.js';
import axios from 'axios';
import cheerio from 'cheerio';

const fetchMatches = async (type) => {
    const all_matches = [];

    const match_list = CRICBUZZ.MATCHES[type];
    const match_category = match_list.name;
    const match_list_url = match_list.url;

    const matches = await axios({
        method: 'GET',
        url: match_list_url,
        headers: {}
    })

    let resp = cheerio.load(matches.data);

    // get all matches
    let typeOfMatches = [];
    resp('select[id="select-tabs"]').find('option').each(function(index, element) {
        typeOfMatches.push(resp(element).attr('value'));
    })

    // for each type of match, get list of matches
    typeOfMatches.forEach(function (matchType) {
        resp(`div[id="${matchType}-matches"]`).find('div.ui-live-matches').each(function(index, element) {
            let updates = [];
            let matchUrl = null;
            resp(element).find('div.list-group').find('div > div > h3 > div').each(function(index, scoreElement) {
                updates.push(resp(scoreElement).text())
            })
            resp(element).find('a').each(function(index, element) {
                let link = resp(element).attr('href');
                if(link.startsWith('/live-cricket-scores/')) matchUrl = link;
            })
            all_matches.push({ match_category, matchType, updates, matchUrl })
        })
    })

    return { matches : all_matches };
}

export default fetchMatches
