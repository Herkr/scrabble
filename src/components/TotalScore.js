// all the found input words added together

import getScoreForWord from './GetScoreForWord';

function totalScore(foundWords) {
    var score = 0;

    for (let i = foundWords.length -1; i >= 0; i--) {
      let scoreForWord = getScoreForWord(foundWords[i]);
      if(scoreForWord !== 0)
      {
        score = score + scoreForWord;
      }
      else if(score > 0 && scoreForWord === 0)
      {
        score = score - 1;
      }
    }
    return score;
  }

  export default totalScore;