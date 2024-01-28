// 1047. Remove All Adjacent Duplicates In String (LeetCode)
// You are given a string s consisting of lowercase English letters.
//  A duplicate removal consists of choosing two adjacent and equal letters and removing them.
// We repeatedly make duplicate removals on s until we no longer can.

// We can solve this question using previous question technique
// Q9. Remove all occurence of a substr in a str
// But its complexity is m*n (m=size of str   n=size of substr)
// We can solve this question using Stack which can solve this in O(n)

// ****Solution Approach*****
// We create STACK.
// Iterate through the string
// Push element directly in stack if stack is empty
// If stack is not empty then we compare the string element with the element on top of stack
// If both are same then we pop stack element

const removeAdjacentDuplictes=(string)=>{

    let stack=[]
    for (let i = 0; i < string.length; i++) {
        
        if (stack.length!=0 && stack[stack.length-1]==string[i]) {
            stack.pop();
        }
        else{
            stack.push(string[i])
        }
        
    }
    let newString=stack.join('')  //converting character array back to string
    console.log(newString);
    return newString

}

let s = "abbaca"
removeAdjacentDuplictes(s)
