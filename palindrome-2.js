/*
Given a string s, return true if the s can be palindrome after deleting at most one character from it.
*/

function validPalindrome(a) {
  let i=0;
  let j=a.length-1;
  while (i<j) {
    if (a[i] !== a[j]) {
      return isPalindrome(a, i+1, j) || isPalindrome(a, i, j-1);
    }
    i++;
    j--;
  }
  return true;
}

function isPalindrome(a, s, e) {
  while (s<e) {
    if (a[s] !== a[e]) {
      return false;
    }
    s++;
    e--;
  }
  return true;
}