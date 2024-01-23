const isPossible = (array, k, mid) => {

    let cowCount = 1;
    let lastCowPosition = array[0];
    for (let i = 1; i < array.length; i++) {

        if (array[i]-lastCowPosition >= mid) {
            cowCount++;
            lastCowPosition=array[i]
            if (cowCount == k) {
                return true
            }
        }

    }

    return false
}


const aggressiveCows = (array, k) => {
    let start = 0;
    let end = 0
    let result = -1;
    array.sort((a, b) => a - b);

    for (let i = 0; i < array.length; i++) {
        if (array[i] > end) {
            end = array[i]
        }
    }

    let mid = Math.floor((start + end) / 2)

    while (start <= end) {


        if (isPossible(array, k, mid)) {
            result = mid
            start = mid + 1
            mid = Math.floor((start + end) / 2)
         
        }
        else {
            end = mid - 1
            mid = Math.floor((start + end) / 2)
      
        }
       

    }

    console.log(result);
    return result
}

let array = [1,2,3,4,5,6,7,8,9,10];
let k = 4;

aggressiveCows(array, k)