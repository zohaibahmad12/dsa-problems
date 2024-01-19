// We apply binary search loop twice. First we find index of first occurence and in second
// loop we find index of last occurence
// Time Complexity= log(n) + log(n) = 2log(n)= O(n)

const binarySearch = (array, num) => {

    let start = 0;
    let end = array.length - 1;
    let mid = Math.floor((start + end) / 2)
    let firstOccurence = -1;
    let lastOccurence = -1


    while (start <= end) {

        if (num == array[mid] && array[mid - 1] != num) {
            firstOccurence = mid
            break;
        }
        else if (num <= array[mid]) {
            end = mid - 1
            mid = Math.floor((start + end) / 2)
        }
        else if (num > array[mid]) {
            start = mid + 1
            mid = Math.floor((start + end) / 2)
        }
    }


    start = 0;
    end = array.length - 1;
    mid = Math.floor((start + end) / 2)
    while (start <= end) {

        if (num == array[mid] && array[mid + 1] != num) {
            lastOccurence = mid
            break;
        }
        else if (num < array[mid]) {
            end = mid - 1
            mid = Math.floor((start + end) / 2)
        }
        else if (num >= array[mid]) {
            start = mid + 1
            mid = Math.floor((start + end) / 2)
        }
    }

    if (firstOccurence==-1) {
        return 0;
    }

    return (lastOccurence-firstOccurence)+1

   
    


}

let array = [0,0,1,1,2,2,2,2]

console.log(binarySearch(array, 0));