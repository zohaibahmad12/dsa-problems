// 53. Maximum Subarray (LEETCODE)
// Given an integer array nums, find the 
// subarray
//  with the largest sum, and return its sum.

// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.



// This is Kadane's Algorithm which is specifically built to find the
// maximum subarray sum in a given array
const maxSubArray=(array)=>{

    let max=array[0]
    let currentMax=array[0]
    for (let i = 1; i < array.length; i++) {
        currentMax=Math.max(array[i],currentMax+array[i])
        max=Math.max(max,currentMax)
    }

    return max;
}


let nums = [-2,1,-3,4,-1,2,1,-5,4]
console.log(maxSubArray(nums));