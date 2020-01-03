// remove a letter in the random word that is shown
// to check if letter is entered more times than shown

function removeItem(randomWord,item) {
    for (let i = randomWord.length -1; i >= 0; i--) {
      if(item.includes(randomWord[i]))
      {
        return randomWord.slice(0,i) + randomWord.slice(i+1,randomWord.length);
      }
    }
  }

export default removeItem;