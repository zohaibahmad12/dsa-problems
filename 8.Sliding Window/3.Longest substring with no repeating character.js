// 3. Longest Substring Without Repeating Characters (LEETCODE)

// Given a string s, find the length of the longest 
// substring
//  without repeating characters.

// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

const lengthOfLongestSubstring = (string) => {

    let max = 0;
    let charIndexMap = {}

    let start = 0;   //start pointer of sliding window
    let end = 0; //end pointer of sliding window
    while (end < string.length) {

        if (charIndexMap[string[end]] != undefined && charIndexMap[string[end]]>=start) { //element exist in map and it is also in the current window

            start = charIndexMap[string[end]] + 1  //shift the start of window next to the matched char
        }

        charIndexMap[string[end]] = end
        max = Math.max(end - start + 1, max)
        end = end + 1

    }

    return max;
}


console.log(lengthOfLongestSubstring("abcdba"));
