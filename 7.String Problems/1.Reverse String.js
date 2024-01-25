// 344.Reverse String Leetcode

const reverseString = (string) => {

    let i = 0;
    let j = string.length - 1
    while (i <= j) {

        let temp = string[i]
        string[i] = string[j]
        string[j] = temp
        i++;
        j--;
    }
}

let string = ['a', 'l', 'i']
reverseString(string)
console.log(string);