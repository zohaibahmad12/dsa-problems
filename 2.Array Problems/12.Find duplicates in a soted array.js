

const duplicateArray = (array) => {

    let duplicateArr = []
    let occurence = 1;
    for (let i = 0; i < array.length - 1; i++) {

        if (array[i] == array[i + 1]) {
            occurence++;
        }
        else if (occurence > 1) {

            duplicateArr.push(array[i])
            occurence = 1;
        }

    }

    if (occurence > 1) {
        duplicateArr.push(array[array.length - 1])  //push last array element if it occur more than one time
    }

    return duplicateArr

}


let array = [1,2,2]
console.log(duplicateArray(array));