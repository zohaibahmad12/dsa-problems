function LetterCount(str) {
    let max = {freq: 0, word: -1}; // store the maximum frequency and the word
    for (let word of str.split(' ')) { // iterate over the words
      let map = new Map(); // create a map to store the frequency of each letter
      for (let letter of word) { // iterate over the letters
        map.set(letter, (map.get(letter) || 0) + 1); // increment the frequency
      }
      for (let [letter, freq] of map) { // iterate over the map entries
        max = freq > max.freq ? {freq, word} : max; // update the maximum if needed
      }
    }

    if (max.freq==1) {
        return -1
    }
    
    return max.word; // return the word with the most repeated letters
  }


  console.log(LetterCount("No words"));