

const uniqueArray = (array) => {

    let uniqueArr = [];

    if (array.length <= 1) {
        return array
    }

    if (array[0] < array[1]) {
        uniqueArr[0] = array
    }

    for (let i = 1; i < array.length - 1; i++) {

        if (array[i] < array[i + 1] && array[i] > array[i - 1]) {
            uniqueArr.push(array[i]);
        }
    }

    if (array[array.length - 1] > array[array.length - 2]) {
        uniqueArr.push(array[array.length - 1])
    }

    return uniqueArr
}


let array = [1, 1, 2, 3, 4, 5, 5, 5, 5, 6]
console.log(uniqueArray(array));