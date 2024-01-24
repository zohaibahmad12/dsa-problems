// 189.Rotate Array (LeetCode)
const rotateArray = (array, k) => {

    let tempArray = []

    for (let i = 0; i < array.length; i++) {

        tempArray[(i + k) % array.length] = array[i]  //Compute the location where we move the ith element 

    }

    for (let i = 0; i < array.length; i++) {

        array[i] = tempArray[i]

    }



}


let array = [1, 2, 3]
rotateArray(array, 4)
console.log(array);