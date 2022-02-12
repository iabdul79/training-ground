/*
Given an array of non-negative integers nums, you are initially positioned at the first index of the array.
Each element in the array represents your maximum jump length at that position.
Your goal is to reach the last index in the minimum number of jumps.
You can assume that you can always reach the last index.
*/

function jump(nums) {
  const des = nums.length-1;
  let count=0;
  let d=0;
  while (d < des) {
    const s = nums[d];
    if (d+s >= des) {
      return ++count;
    }
    d = maxLeap(nums, d+1, d+s, d);
    count++;
  }
  return count;
}

function maxLeap(arr, s, e, d) {
  let maxdist = 0;
  let ofIdx = 0;
  let i=s;
  while (i<=e) {
    let dist = ++d+arr[i];
    if (dist>maxdist) {
      ofIdx = i;
      maxdist = dist;
    }
    i++;
  }
  return ofIdx;
}