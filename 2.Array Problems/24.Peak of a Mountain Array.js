
// [1,3,7,4,2,0,0]   ==> number which has smaller number on both sides is peak in mountain
const mountainPeak = (array) => {

    let start = 0;
    let end = array.length - 1;
    let mid = Math.floor((start + end) / 2)
    let result;


    while (start<=end) {

        if (array[mid]>array[mid-1] && array[mid]>array[mid+1]) {
            return mid
        }
        else if (array[mid]>array[mid+1]) {
            end = mid-1
            mid = Math.floor((start + end) / 2)
        }
        else if (array[mid]<array[mid+1]) {
            start = mid+1
            mid = Math.floor((start + end) / 2)
        }
    }

    return result


}

let array = [0,5,7,2]

console.log(mountainPeak(array));