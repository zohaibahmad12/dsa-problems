// Replace 'Ali Ahmad Shah' to 'Ali@40Ahmad@40Shah'
// One approach is to make another string but its space complexity will be O(n)

// We can do it without using any other string.
// In this case whenever a space occur the next elements will have to move 2 index forward to store @40 
// at place of empty space.

// Logic:
// 'Ali Ahmad Shah' to 'Ali@40Ahmad@40Shah'
// In this string case i can see that there are 2 spaces so array size will increase by 4 when i replace
// empty space character by @40 characters. So starting from back side of array every character will
// move 4 index back.

const replaceSpace = (array) => {

    // First we count total number of spaces in string array
    let spaceCount = 0
    for (let i = 0; i < array.length; i++) {
        if (string[i] == ' ') {
            spaceCount++;
        }
    }

    let forwardMove = spaceCount * 2   //computing the number of indexes element have to move forward

    // We will start iterating string array from backward using 2 pointer approach
    // One pointer will be at the end of array and one pointer will be at the array.length+forwardMove

    let i = array.length - 1;
    let j = (array.length - 1) + forwardMove

    let iteratedSpaces = 0
    while (iteratedSpaces != spaceCount) {

        if (array[i] != ' ') {
            array[j] = array[i]
            i--;
            j--
        }
        else {
            array[j] = '0';
            array[j - 1] = '4'
            array[j - 2] = '@'
            j = j - 3
            i--
            iteratedSpaces++
        }
    }


}


let string=['a','l','i',' ','a','h','m','a','d',' ','S','h','a','h']
replaceSpace(string)
console.log(string);