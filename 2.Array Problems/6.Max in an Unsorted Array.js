

const minMaxArray = (array) => {

    let min = array[0];
    let max = array[0];

    for (let i = 1; i < array.length; i++) {

        if (array[i] > max) {
            max = array[i]
        }
        else if (array[i] < min) {
            min = array[i]
        }
    }

    return [min,max]
}


console.log(minMaxArray([2,7,11,5,1,22,10,-4]));