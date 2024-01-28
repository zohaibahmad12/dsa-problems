// 209. Minimum Size Subarray Sum (LEETCODE)

// Given an array of positive integers nums and a positive integer target, return the minimal length of a 
// subarray
//  whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

// Example 1:
// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.


// Approach
// Make a window of size 1 at start where start and end pointer are both at 0
// Increase the window size till the window sum exceeds target and then compute the length
//  and update the minimum length.
// Further decrease the window from the begining.

const minSubArray = (array, target) => {

    let start = 0;
    let end = 0;
    let currentSum = 0
    let minSubArraySize = 0;
    while (end < array.length) {

        if (currentSum + array[end] < target) {
            currentSum = currentSum + array[end]
            end++;
        }
        else {
            if (minSubArraySize == 0) {
                minSubArraySize = end - start + 1
            }
            else {
                minSubArraySize = Math.min(minSubArraySize, end - start + 1)
            }
            currentSum = currentSum - array[start]
            start++

        }

    }

    return minSubArraySize;

}

console.log(minSubArray([2, 3, 1, 2, 4, 3], 7));
