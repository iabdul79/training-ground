// Given a string s, return the longest palindromic substring in s


/* DP recursive way */ 
var longestPalindrome = function(str) {
  const mem = {};
  return longestPalindromeString(str,mem);
}

function longestPalindromeString(str, mem) {
  if (mem[str]) {
    return mem[str];
  }
  if (str.length === 1 || isPalindrome(str)) {
    return str;
  }
  const leftStr = str.substring(0, str.length-1);
  const rightStr = str.substring(1);
  const leftKey = `l_${leftStr[0]}_${leftStr.length}`
  mem[leftStr] = longestPalindromeString(leftStr, mem);
  mem[rightStr] = longestPalindromeString(rightStr, mem);
  if (mem[leftStr].length < mem[rightStr].length) {
    return mem[rightStr];
  } else {
    return mem[leftStr];
  }
}

function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}


/* DP iterative way */
function longestPalindrome(s) {
  let n = s.length;
  let res = null;
    
  let dp = Array(n).fill(1).map(() => new Array(n).fill(null));
    
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i; j < n; j++) {
      dp[i][j] = s.charAt(i) == s.charAt(j) && (j - i < 3 || dp[i + 1][j - 1]);
            
      if (dp[i][j] && (res == null || j - i + 1 > res.length)) {
        res = s.substring(i, j + 1);
      }
    }
  }
    
  return res;
}


/* expand around center */
function longestPalindrome(s) {
  const len = s.length;
  let start = end = 0;
  let result;
  for (let i=0; i<len; i++) {
    const len1 = expandAround(s, i, i);
    const len2 = expandAround(s, i, i+1);
    const len = Math.max(len1, len2);
    if (len > end - start) {
      start = Math.floor(i - (len - 1) / 2);
      end = Math.floor(i + len / 2);
    }
  }
  return s.substring(start, end + 1);
}

function expandAround(str, L, R) {
  while (L >= 0 && R < str.length && str[L] === str[R]) {
    L--;
    R++;
  }
  return R-L-1;
}

/* Manacher's algo */

var longestPalindrome = function(s) {
  let longestSoFar = 0, largestStartIndex = 0, largestEndIndex = 0;
  const l = s.length;
  
  // in a given position check for palindromes
  const checkForPalindrome = (i, j) => {
      while (i > -1 && j < l && s[i] === s[j]){   
          i--;
          j++;
      }
      // we want the value before we incremented and broke the loop
      // desired value left = i + 1, right = j -1, 
      // length: right - left - 1 b/c indexing starts at 0
      return [i+1, j-1, j-i-1]; 
  }
  // We will loop through the letters in s
  for (let i = 0; i < l; i++){
      // at each position we will check at that value for the 
      // longest palidrome and the pair of values that forms
      // we will compare this and set the largest length we have so far
      let [x,y,length] = checkForPalindrome(i, i);
      if (length > longestSoFar)
          [largestStartIndex, largestEndIndex, longestSoFar] = [x,y,length];
      if (i !== l){
          [x,y,length] = checkForPalindrome(i, i+1);
           if (length > longestSoFar)
              [largestStartIndex, largestEndIndex, longestSoFar] = [x,y,length];
      }
  }
  
  return s.substring(largestStartIndex, largestEndIndex+1);
  
};