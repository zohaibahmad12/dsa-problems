// In bubble sort we compare the adjacent elements in cycles and in each cycle the bigger element
// will move to its right place on the right side of array

const bubbleSort = (array) => {

    for (let i = 0; i < array.length - 1; i++) {

        let isSwap=false
        for (let j = 0; j < array.length - 1 - i; j++) {

            if (array[j] > array[j + 1]) {
                let temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp

                isSwap=true
            }

        }

        if (!isSwap) {
            break
        }

    }
}

let array = [1,2,4,2,5,7,9]
bubbleSort(array)
console.log(array);