import Scrabble from '../scrabble/Scrabble';

function allTrueComb(word) {
  var comb = allCombinations(word);
  var trueArray = [];

  for (let i = comb.length -1; i >= 0; i--) {
    if(Scrabble.isWordInDirectory(comb[i]) === true)
    {
      trueArray.push(comb[i]);
    }
  }
  return trueArray;
}

const allCombinations = function(word) {
  var comb = [];
  if (word.length === 1) return word;
  for (let i = word.length -1; i >= 0; i--) {
    allCombinations(word.join('').replace(word[i], '').split('')).concat("").map(function(subtree) {
      return comb.push([word[i]].concat(subtree));
    });
  }
  return comb.map(function(str) {return str.join('')});
};

export default allTrueComb;