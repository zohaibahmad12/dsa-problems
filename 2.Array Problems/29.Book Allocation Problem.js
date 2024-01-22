
const isPossible = (array, k, mid) => {

    let sum = 0;
    let count = 1;
    for (let i = 0; i < array.length; i++) {


        if (sum + array[i] <= mid) {
            sum += array[i]
        }
        else {
            count += 1;
            if (count > k || array[i] > mid) {
              
                return false
            }

            sum=array[i]
        }

    }

    return true;
}



const splitArray = (array, k) => {
    let start = 0;
    let end = 0
    let result = -1;

    for (let i = 0; i < array.length; i++) {
        end = end + array[i];
    }

    let mid = Math.floor((start + end) / 2)

    while (start <= end) {


        if (isPossible(array, k, mid)) {

            result = mid
            end = mid - 1
            mid = Math.floor((start + end) / 2)
        }
        else {
            start = mid + 1
            mid = Math.floor((start + end) / 2)
        }

    }

    console.log(result);
    return result
}

let array = [10,20,30,40];
let k = 4;

splitArray(array, k)