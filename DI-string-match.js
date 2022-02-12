/*
A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:
s[i] == 'I' if perm[i] < perm[i + 1], and
s[i] == 'D' if perm[i] > perm[i + 1].
Given a string s, reconstruct the permutation perm and return it. If there are multiple valid permutations perm, return any of them.
*/

function diStringMatch(s) {
  let a=[];
  let l=0; 
  let h=s.length;
  for (let i=0; i<s.length; i++) {
    if (s[i] === 'I') {
      a[i] = l++;
    } else {
      a[i] = h--;
    }
  }
  a[s.length]=l;
  return a;
}