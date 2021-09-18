function findLongestSubstring(s){
    // add whatever parameters you deem necessary - good luck!
    var largest = 0
    //left index
    var j = 0;
    //base case, return 0 if length of string is 0
    if (s.length == 0) return 0
    //sliding window, initialize i as right index
    for (let i = j; i <= s.length; i++) {
        //check if s[i, j] isDistinct, if distinct set largest to current size and keep going
        if (isDistinct(s.substring(j, i))) {
            largest = s.substring(j, i).length
        }
        //if not distinct, move left pointer up
        else {
            j++
        }
        
    }
    return largest
    
  }
  
  function isDistinct(s) {
      return new Set(s).size == s.length
  }
  