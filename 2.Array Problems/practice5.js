function StringChallenge(str) {
    const romanNumerals = {
      "I": 1,
      "IV": 4,
      "V": 5,
      "IX": 9,
      "X": 10,
      "XL": 40,
      "L": 50,
      "XC": 90,
      "C": 100,
      "CD": 400,
      "D": 500,
      "CM": 900,
      "M": 1000
    };
  
    let result = "";
  
    for (const numeral in romanNumerals) {
      while (str.indexOf(numeral) === 0) {
        result += numeral;
        str = str.slice(numeral.length);
      }
    }
  
    return result;
  }
  
  // Example usage:
  const inputString = "LLLXXXVVVV";
  const result = StringChallenge(inputString);
  console.log(result); // Output: "CC"
  