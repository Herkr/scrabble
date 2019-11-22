import Dictionary from '../json/Dictionary-seven.json';

function isWordInDirectory(word) {
    // array of all the words from the dictionary
    var wordsFromDictionary = Object.keys(Dictionary);

    // a, á, æ

  
    if(word.length !== 0)
    {
      if(word.charAt(0) === 'a' || word.charAt(0) === 'á' || word.charAt(0) === 'æ')
      {
        for (let i = 0; i < 3935; i++) {
          if(wordsFromDictionary[i] === word)
          {
            return true;
          }
        }
      }
      if(word.charAt(0) === 'b')
      {
        for (let i = 3936; i < 9063; i++) {
          if(wordsFromDictionary[i] === word)
          {
            return true;
          }
        }
      }
      if(word.charAt(0) === 'd')
      {
        for (let i = 9064; i < 11736; i++) {
          if(wordsFromDictionary[i] === word)
          {
            return true;
          }
        }
      }
      if(word.charAt(0) === 'e')
      {
        for (let i = 11737; i < 13304; i++) {
          if(wordsFromDictionary[i] === word)
          {
            return true;
          }
        }
      }
      if(word.charAt(0) === 'f')
      {
        for (let i = 13305; i < 17776; i++) {
          if(wordsFromDictionary[i] === word)
          {
            return true;
          }
        }
      }
      if(word.charAt(0) === 'g')
      {
        for (let i = 17777; i < 21501; i++) {
          if(wordsFromDictionary[i] === word)
          {
            return true;
          }
        }
      }
      if(word.charAt(0) === 'h')
      {
        for (let i = 21502; i < 26182; i++) {
          if(wordsFromDictionary[i] === word)
          {
            return true;
          }
        }
      }
      if(word.charAt(0) === 'i' || word.charAt(0) === 'í')
      {
        for (let i = 26183; i < 27578; i++) {
          if(wordsFromDictionary[i] === word)
          {
            return true;
          }
        }
      }
      if(word.charAt(0) === 'j')
      {
        for (let i = 27579; i < 28202; i++) {
          if(wordsFromDictionary[i] === word)
          {
            return true;
          }
        }
      }
      if(word.charAt(0) === 'k')
      {
        for (let i = 28203; i < 34003; i++) {
          if(wordsFromDictionary[i] === word)
          {
            return true;
          }
        }
      }
      if(word.charAt(0) === 'l')
      {
        for (let i = 34004; i < 38138; i++) {
          if(wordsFromDictionary[i] === word)
          {
            return true;
          }
        }
      }
      if(word.charAt(0) === 'm')
      {
        for (let i = 38139; i < 41673; i++) {
          if(wordsFromDictionary[i] === word)
          {
            return true;
          }
        }
      }
      if(word.charAt(0) === 'n')
      {
        for (let i = 41674; i < 43694; i++) {
          if(wordsFromDictionary[i] === word)
          {
            return true;
          }
        }
      }
      if(word.charAt(0) === 'o' || word.charAt(0) === 'ó' || word.charAt(0) === 'ø')
      {
        for (let i = 43695; i < 47643; i++) {
          if(wordsFromDictionary[i] === word)
          {
            return true;
          }
        }
      }
      if(word.charAt(0) === 'p')
      {
        for (let i = 47644; i < 49898; i++) {
          if(wordsFromDictionary[i] === word)
          {
            return true;
          }
        }
      }
      if(word.charAt(0) === 'r')
      {
        for (let i = 49899; i < 53774; i++) {
          if(wordsFromDictionary[i] === word)
          {
            return true;
          }
        }
      }
      if(word.charAt(0) === 's')
      {
        for (let i = 53775; i < 64858; i++) {
          if(wordsFromDictionary[i] === word)
          {
            return true;
          }
        }
      }
      if(word.charAt(0) === 't')
      {
        for (let i = 64859; i < 69816; i++) {
          if(wordsFromDictionary[i] === word)
          {
            return true;
          }
        }
      }
      if(word.charAt(0) === 'u' || word.charAt(0) === 'ú')
      {
        for (let i = 69817; i < 71582; i++) {
          if(wordsFromDictionary[i] === word)
          {
            return true;
          }
        }
      }
      if(word.charAt(0) === 'v')
      {
        for (let i = 71583; i < 74816; i++) {
          if(wordsFromDictionary[i] === word)
          {
            return true;
          }
        }
      }
      if(word.charAt(0) === 'y' || word.charAt(0) === 'ý')
      {
        for (let i = 74817; i < 75164; i++) {
          if(wordsFromDictionary[i] === word)
          {
            return true;
          }
        }
      }
      
      return false;
    }
    return;
}
export default isWordInDirectory;
