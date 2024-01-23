
const binarySearch = (array, num) => {

    let start = 0;
    let end = array.length - 1;
    let mid = Math.floor((start + end) / 2)
    let result = -1


    while (start<=end) {

        if (num == array[mid]) {
            return mid
        }
        else if (num < array[mid]) {
            end = mid-1
            mid = Math.floor((start + end) / 2)
        }
        else {

            start = mid+1
            mid = Math.floor((start + end) / 2)

        }
    }

    return result


}

let array = [8]

console.log(binarySearch(array, 8));