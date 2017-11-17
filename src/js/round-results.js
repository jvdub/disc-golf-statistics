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

    table.querySelector('#' +player + '_total-round').innerText = roundResults[player].getTotalScore();
}

function wireEvents() {
    table.addEventListener('keyup', debounce((e) => updateResults(e), 250));
}

export function init() {
    wireEvents();
}