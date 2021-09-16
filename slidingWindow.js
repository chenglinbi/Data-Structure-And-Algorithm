//write a funciton called maxSubarraySum which accepts an array of integers and a
//number called n. The function should calculate the maximum sum of n consecution elements in the array
//https://stackoverflow.com/questions/8269916/what-is-sliding-window-algorithm-examples
function maxSubarraySum(arr, n) {
    //initialize max
    var max = -Infinity
    //create loop to go through the array until array.length - n + 1
    for (let i = 0; i < arr.length - n + 1; i++) {
        var temp = 0
        //check the sum of n values
        for (let j = 0; j < n; j++) {
            temp += arr[i + j]
        }
        //set max
        if (temp > max) {
            max = temp
        }
    }
    return max
}

//using sliding window technique

function maxSubarraySum(arr, n) {
    //get sum1 of first n numbers in array
    var sum1 = 0
    for (let i = 0; i < n; i++) {
        sum1 += arr[i]
    }
    //initialize sum2
    var sum2 = sum1
    //use loop to get the sum of next set of n numbers by adding sum to arr[n+1] and subtract arr[index - n], set to sum2
    for (let j = n; j < arr.length; j++) {
        sum2 += arr[j] - arr[j - n]
        //compare if sum 2 > sum 1, if so set sum1 = sum 2
        sum1 = sum2 > sum1 ? sum2 : sum1
    }
    
    //return sum1
    return sum1
}

console.log(maxSubarraySum([1,2,5,2,8,1,5],2))
console.log(maxSubarraySum([1,2,5,2,8,1,5],4))
console.log(maxSubarraySum([4,2,1,6],1))
console.log(maxSubarraySum([4,2,1,6,2],4))