// MathChallenge (str) take the str parameter being passed and determine if there is some
//  substring K that can be repeated N > 1 times to produce the input string exactly as it appears.
//  Your program should return the longest substring K, and if there is none it should return the string -1.

// For example: if str is "abcababcababcab" then your program should return abcab because that is the
//  longest substring that is repeated 3 times to create the final string. Another example: if ste is
//  "abababababab" then your program should return ababab because it is the longest substring. If the
//  input string contains only a single character, your program should return the string -1.


// Approach
// We solve this using sliding window concept
// If there is 1 or less than 1 character in string then we simply return -1
// If the Strlength%2==0 then the substr will be the half of original str
// If the Strlength%3==0 then the substr will be the 3rd half of the original str
// Now we make a window of the substr length and slide the window forward


const substrChallenge = (str) => {

    let windowSize = 0;
    if (str.length % 2 == 0) {
        windowSize = str.length / 2
    }
    else if (str.length % 3 == 0) {
        windowSize = str.length / 3
    }
    else {
        return -1;
    }

    let substr = str.slice(0, windowSize);  //First window substring
    let start = windowSize

    while (start < str.length) {

        let currentSubStr = str.slice(start, start + windowSize);
        if (currentSubStr != substr) {
            return -1
        }
        start = start + windowSize
    }

    return substr

}

console.log(substrChallenge("abcababcababcab"));