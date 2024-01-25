// "Sky is always Blue"  ==> "Blue is always Sky"
// 186.Reverse Words (Leetcode)

const reverseWords = (string) => {

    // First we reverese the whole string
    let i = 0
    let j = string.length - 1
    while (i <= j) {

        let temp = string[i]
        string[i] = string[j]
        string[j] = temp
        i++;
        j--;
    }

    // Now traverse the whole string and stop where empty char occur and reverse each word
    let startIndex = 0
    for (let k = 0; k <= string.length; k++) {

        if (string[k] == " " || k==string.length) {

            i = startIndex;
            j = k - 1
            while (i < j) {
                let temp = string[i]
                string[i] = string[j]
                string[j] = temp
                i++;
                j--;
            }
            startIndex=k+1
        }

    }

}

let string = ['S', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
reverseWords(string)
console.log(string);