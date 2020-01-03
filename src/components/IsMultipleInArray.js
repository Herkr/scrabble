// check if a word is entered more that once

function IsMultipleInArray(array, word) {
    var count= 0;
    for (var i=0; i < array.length; i++){
      if (array[i] === word)
      {
        count++;
      }
    }
    
    if(count === 1)
    {
      return false;
    }
    else {
      return true;
    }
  }

  export default IsMultipleInArray;