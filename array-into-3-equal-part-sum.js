/*
Given an array of integers arr, return true if we can partition the array into three non-empty parts with equal sums.

Formally, we can partition the array if we can find indexes 
i + 1 < j with (arr[0] + arr[1] + ... + arr[i] == 
arr[i + 1] + arr[i + 2] + ... + arr[j - 1] == 
arr[j] + arr[j + 1] + ... + arr[arr.length - 1])

Hint: take the sum of array, if sum%3 != 0 return false or else continue
two pointer, left and right,
leftAvg == rightAvg == sum/3
&&
i+1<j
*/

function canThreePartsEqualSum(a) {
  const sum = a.reduce((s,c) => s+c);
  if (sum%3 !== 0) return false;

  const avg = sum/3;
  let i=0;
  let j=a.length-1;
  let la;
  let ra;
  while (i<=j) {
    if (la !== avg) {
      la=(la || 0)+a[i++];
    }
    if (ra !== avg) {
      ra=(ra||0)+a[j--];
    }
    if (la === avg && ra === avg) {
      return i<=j;
    }

  }
  return false;
}