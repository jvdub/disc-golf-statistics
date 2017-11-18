import { DiscGolfRound } from './disc-golf-round.js';
import { debounce } from './debounce.js';

const roundResults = {};
const table = document.getElementById('round-results');

function updateResults (e) {
    let player = e.target.name.split('_')[0];
    let playerName = table.querySelector('[name="' + player + '"').value;

    if (!roundResults[player]) {
        roundResults[player] = new DiscGolfRound();
    }

    roundResults[player].player = playerName;
    roundResults[player].scores = Array.from(table.querySelectorAll('[name^="' + player + '_hole-"]')).map(( element) => +element.value);

    table.querySelector('#' +player + '_total-round').innerText = roundResults[player].getTotalScore() === 0 ? '' : roundResults[player].getTotalScore();
    table.querySelector('#' +player + '_total-front').innerText = roundResults[player].getFrontScore() === 0 ? '' : roundResults[player].getFrontScore();
    table.querySelector('#' +player + '_total-back').innerText = roundResults[player].getBackScore() === 0 ? '' : roundResults[player].getBackScore();
    table.querySelector('#' +player + '_over-under').innerText = roundResults[player].getOverUnder();
}

function wireEvents() {
    table.addEventListener('keyup', debounce((e) => updateResults(e), 250));
}

export function init() {
    wireEvents();
}