export class DiscGolfRound {
    constructor(player) {
        this._player = player;
    }

    get player() {
        return this._player;
    }

    set player(player) {
        this._player = player;
    }

    get scores() {
        return this._scores;
    }

    set scores(scores) {
        this._scores = scores;
    }

    getTotalScore() {
        return this._scores.reduce((t, s) => t + s);
    }
}