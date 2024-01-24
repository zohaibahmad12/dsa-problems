

const merge = (array1, array2) => {

    let mergedArray = []
    let i = 0;
    let j = 0;

    while (i < array1.length && j < array2.length) {

        if (array1[i]<array2[j]) {
            mergedArray.push(array1[i])
            i++;
        }
        else{
            mergedArray.push(array2[j])
            j++;
        }
    }


    while (i<array1.length) {
        mergedArray.push(array1[i])
            i++;
    }
    while (j<array2.length) {
        mergedArray.push(array2[j])
            j++;
    }

    console.log(mergedArray);

    return mergedArray

}


let array1=[2,4,5]
let array2=[1,7,8]

merge(array1,array2)