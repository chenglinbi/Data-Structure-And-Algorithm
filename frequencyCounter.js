//valid anagram
function validAnagram(str1, str2) {
    //declare two objs aka hashtable
    var obj1 = {}
    var obj2 = {}
    //populate hashtable with characters and its count, both string
    for (let i = 0; i < str1.length; i++) {
        obj1[str1[i]] ? obj1[str1[i]]++ : obj1[str1[i]] = 1
    }

    for (let j = 0; j < str2.length; j++) {
        obj2[str2[j]] ? obj2[str2[j]]++ : obj2[str2[j]] = 1
    }
    console.log(obj1)
    console.log(obj2)
    //loop through first hashtable with key
    for (let key in obj1) {
        //compare the value of every key in first value against value of key in second table
        if (obj1[key] != obj2[key]) {
            //if not the same return false
            return false
        }
    }
    return true
}
//console.log(validAnagram('', '')) //true
//console.log(validAnagram('aaz', 'zza')) //false
//console.log(validAnagram('anagram', 'nagaram')) //true
//console.log(validAnagram('rat','car')) //false