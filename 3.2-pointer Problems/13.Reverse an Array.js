// [2,7,1,4]  ==> [4,1,2,7]
// Dont use second array make change to the original array


const reverseArray = (array) => {

    let i = 0;
    let j = array.length - 1

    while (i < j) {
        let tempSwap = array[i];
        array[i] = array[j]
        array[j] = tempSwap;

        i++;
        j--;
    }

}

let array = [2, 7, -1, 4, -2];
reverseArray(array)
console.log(array);
