/*
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".
*/

function longestCommonPrefix(strs) {
  if (!strs || !strs.length || !strs[0][0]) {
    return '';
  }
  if (strs.length === 1) {
    return strs[0];
  }
  let res = '';
  let i=0;
  let currentChar = strs[0][i];
  while (currentChar) {
    for (let j=1; j<strs.length; j++) {
      let str = strs[j];
      if (str[i] !== currentChar) {
        return res;
      }
    }
    res += currentChar;
    i++;
    currentChar = strs[0][i];
  }
  return res;
}