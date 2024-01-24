// We find the minimum value from the whole array and push it on first index
// Then find minimum value and push it to second index and so on

const selectionSort = (array) => {

    for (let i = 0; i < array.length-1; i++) {

        let minIndex = i

        for (let j = i + 1; j < array.length; j++) {

            if (array[j] < array[minIndex]) {
                minIndex = j
            }

        }

        let temp = array[i]
        array[i] = array[minIndex];
        array[minIndex] = temp



    }
}


let array=[1,2,4,3]
selectionSort(array)
console.log(array);