// 125. Valid Palindrome  (Leetcode)
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters
//  and removing all non-alphanumeric characters, it reads the same forward and backward. 
// Alphanumeric characters include letters and numbers.


const isAlphabet = (char) => {
    return (char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z' || char >= '0' && char <= '9');
}

const isPalindrome = (string) => {

    let i = 0;
    let j = string.length - 1;

    while (i < j) {

        while (!isAlphabet(string[i]) && i < j) {
            i++;
        }
        while (!isAlphabet(string[j]) && i < j) {
            j--;
        }
        if (i < j && string[i].toLowerCase() != string[j].toLowerCase()) {
            return false
        }
        else {
            i++;
            j--;
        }
    }

    return true;
}

console.log(isPalindrome("0P00000"));