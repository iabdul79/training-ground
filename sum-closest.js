/*
Given an integer array nums of length n and an integer target,
find three integers in nums such that the sum is closest to target.
Return the sum of the three integers.
You may assume that each input would have exactly one solution.
*/

const threeSumClosest = (nums, target) => {
  const l = nums.sort((a,b) => a-b);
  let sum = l[0]+l[1]+l[l.length-1];
  for (let i=0; i<l.length-2; i++) {
    let s=i+1, e=l.length-1;
    while (s<e) {
      let tempSum = l[i]+l[s]+l[e];
      if (tempSum > target) {
        e--;
      } else {
        s++;
      }
      if (Math.abs(sum-target) > Math.abs(target-tempSum)) {
        sum = tempSum;
      }
    }
  }
  return sum;
}