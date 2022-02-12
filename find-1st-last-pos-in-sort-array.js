/*
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.
*/

/* NOT COMPLETE 
  fail case [3,3,3], 3 => Exp: [0,2] ; Ans: [0,1]
*/

const searchRange = (nums, t) => {
  let s = 0;
  let e = nums.length-1;
  const res = [];
  while (e-s > 1) {
    let mid = parseInt((e-s)/2)+s;
    if (t === nums[mid]) {
      if (nums[mid-1] === t) {
        return [mid-1, mid];
      } else if (nums[mid+1] === t) {
        return [mid, mid+1];
      } else {
        return [mid, mid];
      }
    } else if (t < nums[mid]) {
      e=mid;
    } else {
      s=mid+1;
    }
  }
  if (nums[s] === t) {
    return nums[e] === t ? [s,e] : [s,s];
  }
  if (nums[e] === t) {
    return [e,e];
  }
  return [-1, -1];
}