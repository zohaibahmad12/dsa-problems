
// Another way to find pivot
const pivotIndex = (array) => {

    let start = 0;
    let end = array.length - 1
    let mid = Math.floor(end / 2)

    while (start < end) {

         if (array[mid] < array[0]) {
            end = mid
            mid = Math.floor((start + end) / 2)
        }
        else if (array[mid] >= array[0]) {
            start = mid + 1
            mid = Math.floor((start + end) / 2)
        }

    }

    return start;

}


const binarySearch = (array, start, end, num) => {


    let mid = Math.floor((start + end) / 2)

    while (start <= end) {

        if (num == array[mid]) {
            return mid
        }
        else if (num < array[mid]) {
            end = mid - 1
            mid = Math.floor((start + end) / 2)
        }
        else {

            start = mid + 1
            mid = Math.floor((start + end) / 2)

        }
    }

    return -1;


}


const search = (array, element) => {

    let pivot = pivotIndex(array)

    if (pivot == -1) {
        let start = 0;
        let end = array.length - 1;
         return binarySearch(array, start, end, element)
    }
    else if (element >= array[0] && element<=array[pivot-1]) {
        let start = 0;
        let end = (pivot==0)?0:pivot-1;
        return binarySearch(array, start, end, element)
    }
    else  {
        let start = pivot;
        let end = array.length - 1;
        return binarySearch(array, start, end, element)
    }
}



search([3,1],3)



