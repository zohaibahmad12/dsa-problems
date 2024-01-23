// Don't use any pre-built funciton to find square root

const mySqrt = (num) => {

    let start = 0;
    let end = num;
    let mid = Math.floor((start + end) / 2)
    let sqrt = 0
    // First we find integer sqrt
    while (start <= end) {


        if (mid * mid == num) {
            sqrt = mid
            break;
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



    // First continue adding 0.1 to the integer sqrt until the multiplication does not go above the original number
    // then continue adding 0.01 and then 0.001  (sqrt to 3 decimal points)
    let i = 0;
    let factor = 1;
    let ans = sqrt
    while (i < 3) {
        factor = factor / 10
        j = ans
        while (j * j < num) {
            ans = j
            j = j + factor
        }

        i++
    }

    return ans




}

console.log(mySqrt(8));