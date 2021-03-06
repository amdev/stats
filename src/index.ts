import fs from 'fs';

const matches = fs
  .readFileSync('football.csv', {
    encoding: 'utf-8',
  })
  .split('\n')
  .map((row: string): string[] => {
    return row.split(',');
  });

const MatchResult = {
  HomeWin: 'H',
  AwayWin: 'A',
  Draw: 'D',
};

let manuWins = 0;
let drawMatch = 0;

for (let match of matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manuWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manuWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.Draw) {
    drawMatch++;
  }
}

console.log(`Man United wons ${manuWins} games and draw ${drawMatch} games.`);
