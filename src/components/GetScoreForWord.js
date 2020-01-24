import Alphabet from '../components/Alphabet';

function  getScoreForWord(word) {
    var score = 0;
      for(let i = word.length - 1; i >= 0; i--) {
        for(let j = Alphabet.length - 1; j >= 0; j--) {
          if (word[i] === Alphabet[j].id)
          {
            score = score + Number(Alphabet[j].value);
          }
        } 
    }
      return score;
  }

  export default getScoreForWord;