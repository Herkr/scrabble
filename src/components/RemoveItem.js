// remove a letter in the random word that is shown
// to check if letter is entered more times than shown

function removeItem(array,item) {
    for (let i = array.length -1; i >= 0; i--) {
      if(item.includes(array[i]))
      {
        return array.slice(0,i) + array.slice(i+1,array.length);
      }
    }
  }

export default removeItem;