// Using hashing technique hashtable
// Element which occur more than n/2 times in an array
const majorityElement = (array) => {

    let occurences = {}

    for (let i = 0; i < array.length; i++) {

        if (!occurences[array[i]]) {
            occurences[array[i]] = 1
        }
        else {
            occurences[array[i]] = occurences[array[i]] + 1;
        }

    }


    for (const key in occurences) {

        if (occurences[key] > Math.floor(array.length / 2)) {

            return key
        }
    }

}


let array = [2,2,1,1,2,2,2]
console.log(majorityElement(array));