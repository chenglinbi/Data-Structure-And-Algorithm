/*
Given an array of positive integers nums and a positive integer target, return the minimal length of a contiguous subarray [numsl, numsl+1, ..., numsr-1, numsr] of which the sum is greater than or equal to target. If there is no such subarray, return 0 instead.

Example 1:

Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.
Example 2:

Input: target = 4, nums = [1,4,4]
Output: 1
Example 3:

Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0

https://www.youtube.com/watch?v=jKF9AcyBZ6E&ab_channel=NickWhite
*/
function minSubArrayLen(arr, n) {
    var size = Infinity 
    //left index
    var left = 0
    
    var sum = 0
    //right index, a loop that reaches the end of array
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        while (sum >= n) {
            size = Math.min(size, i+1-left)
            sum -=arr[left]
            left++
        }
    }
    return size != Infinity ? size : 0
}

function getSum(arr) {
    var sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}
