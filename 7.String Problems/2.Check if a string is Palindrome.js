// string=alibila
// Logic: If reversing the string make the same string then the string is palindrome

const isPalindrome=(string)=>{

    let i=0;
    let j=string.length-1
   while (i<=j) {
    
    if (string[i]!=string[j]) {
        return false
    }

    i++;
    j--;
   }

   return true
}

console.log(isPalindrome("p"));