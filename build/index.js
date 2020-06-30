"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var matches = fs_1.default
    .readFileSync('football.csv', {
    encoding: 'utf-8',
})
    .split('\n')
    .map(function (row) {
    return row.split(',');
});
var homeWin = 'H';
var awayWin = 'A';
var isDraw = 'D';
var manuWins = 0;
var drawMatch = 0;
for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
    var match = matches_1[_i];
    if (match[1] === 'Man United' && match[5] === homeWin) {
        manuWins++;
    }
    else if (match[2] === 'Man United' && match[5] === awayWin) {
        manuWins++;
    }
    else if (match[2] === 'Man United' && match[5] === isDraw) {
        drawMatch++;
    }
}
console.log("Man United wons " + manuWins + " games and draw " + drawMatch + " games.");
