/*
Balanced strings are those that have an equal quantity of 'L' and 'R' characters.
Given a balanced string s, split it in the maximum amount of balanced strings.
Return the maximum amount of split balanced strings.
*/

function balancedStringSplit(s) {
  let b=0;
  let c=1;
  for (let i=0; i<s.length; i++) {
    if (s[i] === 'R') {
      b++;
    } else {
      b--;
    }
    if (b === 0) {
      c++;
    }
  }
  return c;
}