/*
Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:

'.' Matches any single character.​​​​
'*' Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial).
*/

function isMatch(str, rx) {
  let memo = Array(str.length+1).fill(Array(rx.length).fill(null));
  return regxCheck(0, 0, str, rx, memo);
}

function regxCheck(si, ri, str, rx, memo) {
  if (memo[si][ri] !== null) {
    return memo[si][ri];
  } 
  if (ri === rx.length) {
    memo[si][ri] = si === str.length;
  } else {
    const firstTest = si < str.length && (str[si] === rx[ri] || rx[ri] === '.');
    if (ri+1 < rx.length && rx[ri+1] === '*') {
      memo[si][ri] = regxCheck(si, ri+2, str, rx, memo) || (firstTest && regxCheck(si+1, ri, str, rx, memo));
    } else {
      memo[si][ri] = firstTest && regxCheck(si+1, ri+1, str, rx, memo);
    }
  }
  return memo[si][ri];
}