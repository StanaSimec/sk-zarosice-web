import { MATCH_PLAN } from "../data";

export class NextMatchService {
  static _removePlayedMatches(matches) {
    return matches.filter((match) => match.date >= Date.now());
  }

  static _sortMatchesByDate(matches) {
    return matches.sort((a, b) => a.date - b.date);
  }

  static _calculateNearestMatchByDate(matches) {
    return this._sortMatchesByDate(matches)[0];
  }

  static _getNextMatch(matches) {
    const matchesToPlay = this._removePlayedMatches(matches);
    return this._calculateNearestMatchByDate(matchesToPlay);
  }

  static getAteamNextMatch() {
    return this._getNextMatch([...MATCH_PLAN.A_TEAM]);
  }

  static getU19NextMatch() {
    return this._getNextMatch([...MATCH_PLAN.U19]);
  }

  static getU15NextMatch() {
    return this._getNextMatch([...MATCH_PLAN.U15]);
  }
}
