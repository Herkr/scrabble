import shuffleArray from './ShuffleArray';

// get shuffled word from Dictionary.json
function getShuffledWordFromDictionary(lengthOfWord, wordsFromDictionary) {
    // array of all the words with N letter
    var arrayOfNLength = wordsFromDictionary
    .filter(word => word.length === lengthOfWord);
    var shuffledArray = shuffleArray(arrayOfNLength);
    // empty array for words with lower case
    var items = [];
    // unicode: Á=\u00C1 Ð=\u00D0 Í=\u00CD Ó=\u00D3 Ú=\u00DA Ý=\u00DD Æ=\u00C6 Ø=\u00D8'   
    var checkChar = /^[A-Z\u00C1\u00D0\u00CD\u00D3\u00DA\u00DD\u00C6\u00D8]/;
  
    for (let i = shuffledArray.length - 1; i >= 0; i--) {
      // check if upper case
      if(checkChar.test(shuffledArray[i]) === false){
        items.push(shuffledArray[i]);
      }
    }
    return items[0];
  }

export default getShuffledWordFromDictionary;