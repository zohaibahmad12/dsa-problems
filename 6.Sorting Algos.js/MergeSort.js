

const merge = (array, lb, mid, ub) => {

    let tempArray1 = [];
    let tempArray2 = [];

    for (let i = 0; i < mid-lb+1; i++) {
        tempArray1[i] = array[lb + i]

    }
    for (let i = 0; i < ub - mid; i++) {
        tempArray2[i] = array[mid + 1 + i];

    }

    // console.log("Lower bound is",lb);
    // console.log("Upper bound is",ub);
    // console.log("Mid bound is",mid);
    // console.log("Array1 is",tempArray1);
    // console.log("Array2 is",tempArray2);

    let i=0;
    let j=0;
    let k = lb;

    while (i < tempArray1.length && j < tempArray2.length) {

        if (tempArray1[i] < tempArray2[j]) {
            array[k] = tempArray1[i];
            i++;
            k++;
        }
        else {
            array[k] = tempArray2[j];
            j++;
            k++;
        }
    }



    while (j < tempArray2.length) {
        array[k] = tempArray2[j];
        j++;
        k++;
    }

    while (i < tempArray1.length) {
        array[k] = tempArray1[i];
        i++;
        k++;
    }

    // console.log(array);

}

const mergeSort = (array, lb, ub) => {


    // console.log("Lower is", lb);
    // console.log("Upper is", ub);
   
    if (lb >= ub) {
        return
    }

    let mid = Math.floor((lb + ub) / 2)
    // console.log("Mid is", mid);
    mergeSort(array,lb, mid);
    mergeSort(array,mid + 1, ub);
    merge(array, lb, mid, ub);

}




let array = [7,7,2,7]
mergeSort(array, 0, array.length-1)
console.log(array);