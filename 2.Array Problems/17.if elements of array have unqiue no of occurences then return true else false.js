
const isUniqueOccurences = (array) => {

    let hashMap = {};

    for (let i = 0; i < array.length; i++) {

        if (hashMap[array[i]]) {
            hashMap[array[i]] = hashMap[array[i]] + 1;
        }
        else {
            hashMap[array[i]] = 1
        }
    }

    let set = new Set(Object.values(hashMap));
    return set.size == (Object.values(hashMap)).length
}

let array = [5,1,1]

console.log(isUniqueOccurences(array)); 