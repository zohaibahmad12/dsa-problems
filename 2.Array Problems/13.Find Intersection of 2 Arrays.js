const intersection = (arr1, arr2) => {

    let arr1HashTable = {}

    let intersection = []
    for (let i = 0; i < arr1.length; i++) {

        if (!arr1HashTable[arr1[i]]) {
            arr1HashTable[arr1[i]] = 1
        }

    }


    for (let i = 0; i < arr2.length; i++) {

        if (arr1HashTable[arr2[i]]) {
            intersection.push(arr2[i])
        }

    }


    return intersection

}


console.log(intersection([1],[]));