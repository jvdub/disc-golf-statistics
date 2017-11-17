export class DiscGolfRound {
    constructor(player) {
        this._player = player;
        this._par = 54;
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

    get par() {
        return this._par;
    }

    set par(par) {
        this._par = par;
    }

    getTotalScore() {
        return this._scores.reduce((t, s) => t + s);
    }

    getFrontScore() {
        return this._scores.slice(0, 9).reduce((t, s) => t + s);
    }

    getBackScore() {
        return this._scores.slice(9, 18).reduce((t, s) => t + s);
    }

    getOverUnder() {
        let overUnder = this.getTotalScore() - this._par;

        return overUnder >= 0 ? '+' + overUnder : overUnder;
    }
}