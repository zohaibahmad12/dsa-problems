// In this we do the task by using any built in js method


// Method to find the index of first occurence of substr
const indexOf = (string, substr) => {

    let k = 0;
    let i = 0;
    while (i < string.length && k < substr.length) {

        if (string[i] == substr[k]) {
            k++;
            i++;
        }
        else {
            i = i - k + 1
            k = 0;
        }
    }

    if (k != substr.length) {
        return -1
    } else {
        return i - substr.length;
    }
}


// Method to remove the substr 
const removeSubStr = (string, substr, index) => {

    let newString = ""
    let i = 0;
    while (i < string.length) {

        if (i == index) {
            i = i + substr.length
        }
        else {
            newString = newString + string[i]
            i++;
        }

    }

    return newString
}


const removeOccurrences = (string, substr) => {

// This method is as same as Question#8, Difference is we define our own methods
    let index=indexOf(string,substr);
    while (index!= -1) {
  
        string=removeSubStr(string,substr,index)
        index=indexOf(string,substr)
    }

    console.log(string);
}


let s = "daabcbaabcbc"
let part = "abc"

removeOccurrences(s,part)


