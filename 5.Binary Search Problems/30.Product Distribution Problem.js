// 2064. Minimized Maximum of Products Distributed to Any Store (LeetCode)

const isPossible = (array, k, mid) => {

    let count = 0
    for (let i = 0; i < array.length; i++) {

        if (Math.floor(array[i] / mid) != 0) {
            count = count + Math.ceil(array[i] / mid)
        }
        else {
            count = count + 1
        }

        if (count > k) {
            return false
        }
    }

    return true
}


const productDistribution = (array, k) => {

    let start = 0;
    let end = 0;
    let ans = -1
    for (let i = 0; i < array.length; i++) {
        end = end + array[i]
    }

    let mid = Math.floor(start + end / 2)

    while (start <= end) {

        if (isPossible(array, k, mid)) {
            ans = mid
            end = mid - 1
            mid = Math.floor((start + end) / 2)

        }
        else {
        
            start = mid + 1      
            mid = Math.floor((start + end) / 2)
         
        }
    }

    return ans
}

let array = [11,6]
let k = 6

console.log(productDistribution(array, k));