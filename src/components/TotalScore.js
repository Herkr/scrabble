// all the found input words added together

import getScoreForWord from './GetScoreForWord';

function totalScore(foundWords, falseWords) {
    var score = 0;
  
    for (let i = foundWords.length -1; i >= 0; i--) {
      score = score + getScoreForWord(foundWords[i]);
      console.log(falseWords + " Found: " + foundWords + " Stig: " + getScoreForWord(foundWords));
    }
    return score - falseWords.length;
  }

  export default totalScore;