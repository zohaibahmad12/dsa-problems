

const bubbleSort = (array) => {

    for (let i = 0; i < array.length - 1; i++) {

        for (let j = i + 1; j < array.length; j++) {

            if (array[i] > array[j]) {
                let temp = array[i]
                array[i] = array[j]
                array[j] = temp
            }

        }

    }
}

let array=[9,7,5,4,1]
bubbleSort(array)
console.log(array);