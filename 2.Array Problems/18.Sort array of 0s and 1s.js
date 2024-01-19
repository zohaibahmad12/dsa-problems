

const sort = (array) => {

    let i = 0;
    let j = array.length-1

    while (i < j) {


        if (array[i] == 0) {
            i++
        }
        if (array[j] == 1) {
            j--
        }

        if (array[i] == 1 && array[j] == 0) {
            let temp = array[i]
            array[i] = array[j]
            array[j] = temp
            i++;
            j--
        }

    }

    return array;

}


let array = [1,0]
console.log(sort(array));