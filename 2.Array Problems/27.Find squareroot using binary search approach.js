// Don't use any pre-built funciton to find square root

const mySqrt = (num) => {

    let start = 0;
    let end = num;
    let mid = Math.floor((start + end) / 2)
    let sqrt = 0
    while (start <= end) {


        if (mid * mid == num) {
            return mid
        }
        if (mid * mid > num) {
            end = mid - 1;
            mid = Math.floor((start + end) / 2)
        }
        else {
            sqrt = mid
            start = mid + 1;
            mid = Math.floor((start + end) / 2)
        }
    }

    return sqrt
}

console.log(mySqrt(8));

