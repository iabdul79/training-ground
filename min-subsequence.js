/*
Given the array nums,
obtain a subsequence of the array whose sum of elements is strictly greater than the sum of the non included elements in such subsequence. 
If there are multiple solutions, return the subsequence with minimum size and if there still exist multiple solutions,
return the subsequence with the maximum total sum of all its elements.
A subsequence of an array can be obtained by erasing some (possibly zero) elements from the array.
Note that the solution with the given constraints is guaranteed to be unique. Also return the answer sorted in non-increasing order.
*/

function minSubsequence(n) {
  n.sort((a,b) => b-a);
  let i=0;
  let j=n.length-1;
  let ls=rs=0;
  while (i<j) {
    if (ls > rs) {
      rs+=n[j--];
    } else  if (ls <= rs) {
      ls+=n[i++]
    }
  }
  return n.slice(0,i);
}