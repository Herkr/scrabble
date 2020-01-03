import shuffleArray from './ShuffleArray';

// shuffle the letters in a word
function shuffleWord(word) {
    // create array
    var newWord = word.split('');
    shuffleArray(newWord);
  
    return newWord;
  }

export default shuffleWord;