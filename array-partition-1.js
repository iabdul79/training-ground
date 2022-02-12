/*
Given an integer array nums of 2n integers,
group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) such that the sum of min(ai, bi) for all i is maximized.
Return the maximized sum.
*/

function arrayPairSum(nums) {
  nums.sort((a,b) => a-b);
  let sum=i=0;
  while (i<nums.length) {
    sum+=Math.min(nums[i], nums[i+1]);
    i+=2;
  }
  return sum;
}