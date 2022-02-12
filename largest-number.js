/*
Given a string s which consists of lowercase or uppercase letters,
return the length of the longest palindrome that can be built with those letters.
Letters are case sensitive, for example, "Aa" is not considered a palindrome here.
*/

function longestPalindrome(s) {
  const map = new Map();
  let total = 0;

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      total += 2
      map.delete(s[i]);
    } else {
      map.set(s[i], 1);
    }
  }

  if (map.size > 0) {
    return total + 1;
  }
  return total;
}