// Using hashing technique hashtable

const duplicateArray = (array) => {

    let occurences = {}
    let duplicateArr = [];

    for (let i = 0; i < array.length; i++) {

        if (!occurences[array[i]]) {
            occurences[array[i]] = 1
        }
        else {
            occurences[array[i]] = occurences[array[i]] + 1;
        }

    }


    for (const key in occurences) {

        if (occurences[key] != 1) {

            duplicateArr.push(key)
        }
    }

    return duplicateArr;
}


let array = [2, 7, 3, 1, 2, 4, 5, 4]
console.log(duplicateArray(array));