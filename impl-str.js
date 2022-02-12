/*
Implement strStr().
Return the index of the first occurrence of needle in haystack,
or -1 if needle is not part of haystack.

Clarification:
What should we return when needle is an empty string?
This is a great question to ask during an interview.

For the purpose of this problem,we will return 0 when needle is an empty string.
This is consistent to C's strstr() and Java's indexOf().
*/

// mississippi

function strStr(h, s) {
  let i=0, j=0, idx=0, match=false;
  while (i<h.length && j<s.length) {
    if (h[i] === s[j]) {
      if (!match) {
        idx = i;
        match = true;
      }
      j++;
    } else if (j !== 0) {
      j=0;
      if (match) {
        i=idx;
        match = false;
      }
    }
    i++;
  }
  return j === n.length ? idx : -1;
}