// all the found input words added together

import getScoreForWord from './GetScoreForWord';

function totalScore(foundWords) {
    var score = 0;
  
    for (let i = foundWords.length -1; i >= 0; i--) {
      score = score + getScoreForWord(foundWords[i]);
    }
    return score;
  }

  export default totalScore;