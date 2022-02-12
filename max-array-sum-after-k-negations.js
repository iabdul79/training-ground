/*
Given an integer array nums and an integer k, modify the array in the following way:

choose an index i and replace nums[i] with -nums[i].
You should apply this process exactly k times. You may choose the same index i multiple times.

Return the largest possible sum of the array after modifying it in this way.
*/

function largestSumAfterKNegations(n, k) {
  n.sort((a,b) => a-b);
  let i=0;
  while (n[i]<0 && k>0) {
    n[i] = -(n[i]);
    k--;
    i++;
  }
  let l = n[i-1] < n[i] ? i-1 : i;
  n[l] = (k>0 && k%2 !== 0) ? -(n[l]) : n[l];
  return n.reduce((s,c) => s+=c, 0);
}