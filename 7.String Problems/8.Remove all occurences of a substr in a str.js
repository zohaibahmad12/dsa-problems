// 1910. Remove All Occurrences of a Substring (Leetcode)
// Given two strings s and part, perform the following operation on s until all
//  occurrences of the substring part are removed:
// Find the leftmost occurrence of the substring part and remove it from s.
// Return s after removing all occurrences of part.

// One way is to use builtin methods of js

const removeOccurrences=(string,substring)=>{
   
    while (string.indexOf(substring)!=-1) {
        string=string.replace(substring,"")
    }

    console.log(string);
    return string
}

let s = "daabcbaabcbc"
let part = "abc"

removeOccurrences(s,part)