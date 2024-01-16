// Using hashing technique hashtable

const uniqueArray = (array) => {

    let occurences = {}
    let uniqueArr = [];

    for (let i = 0; i < array.length; i++) {

        if (!occurences[array[i]]) {
            occurences[array[i]] = 1
        }
        else {
            occurences[array[i]] = occurences[array[i]] + 1;
        }

    }


    for (const key in occurences) {

        if (occurences[key] == 1) {

            uniqueArr.push(key)
        }
    }

    return uniqueArr;
}


let array = [2, 7, 3, 1, 2, 4, 5, 4]
console.log(uniqueArray(array));