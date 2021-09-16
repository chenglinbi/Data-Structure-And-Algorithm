function countUniqueValues(arr) {
    //create hashTable to store unique occurances of values
    var hashTable = {}
    //iterate through array
    for (let i = 0; i < arr.length; i++) {
        //add values of array to hashTable, create new value if unqique
        hashTable[arr[i]] ? hashTable[arr[i]]++ : hashTable[arr[i]] = 1
    }
    //return size of hashTable
    console.log(hashTable)
    return Object.keys(hashTable).length
}

function countUniqueValues2(arr1) {
    //initialize pointer to 0
    var pointer = 0
    //create loop to iterate through arr starting at 0 ending at length - 2
    for (let i = 0; i < arr1.length - 1; i++) {
        //if arr[pointer] < arr[index + 1], increase pointer +1 and set arr[pointer] to arr[index]
        if (arr1[pointer] < arr1[i + 1]) {
            pointer++
            arr1[pointer] = arr1[i + 1]
        }
    }
    
    //remove starting at pointer +1 until end or array
    arr1.splice(pointer + 1,arr1.length - 1)
    //console.log(arr1)
    //return size of arr
    return arr1.length
}

//console.log(countUniqueValues([1,1,1,1,1,2]))
//console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]))
//console.log(countUniqueValues([]))
//console.log(countUniqueValues([-2,-1,-1,0,1]))