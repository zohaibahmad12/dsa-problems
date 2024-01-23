const isPossible = (array, k, mid) => {

    let totalWood = 0;
    for (let i = 0; i < array.length; i++) {

        if (array[i] - mid > 0) {
            totalWood = totalWood + (array[i] - mid)
        }
    }

    if (totalWood >= k) {
        return true;
    }

    return false;
}

const eko = (array, k) => {
    let start = 0;
    let end = 0
    let result = -1;

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

let array=[4,42,40,26,46]
let k=20

eko(array,k)