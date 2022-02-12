// length of longest substring without character repeat


function longestSubString(str) {
  let maxLength = charCount = 0;
  let charMap = {};
  let i2 = i = 0;
  while(i<str.length) {
    let p1 = str[i];
    if (charMap[p1]) {
      charCount = 0;
      charMap = {};
      i2++;
      i=i2;
    } else {
      charMap[p1] = true;
      charCount++;
      i++;
    }
    maxLength = Math.max(maxLength, charCount);
  }
  return maxLength;
}