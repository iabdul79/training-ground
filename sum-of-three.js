/*
Given an integer array nums,
return all the triplets [nums[i], nums[j], nums[k]]
such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
Notice that the solution set must not contain duplicate triplets.
*/

function threeSum(nums) {
  let len = nums.length;
  if (len < 3) {
    return [];
  }
  const sortedNums = nums.sort((a, b) => a-b);
  let i=0;
  let res = [];
  let map = {};
  while (i<len) {
    const fixNum = sortedNums[i];
    const reqNum = 0-fixNum;
    if (!map[reqNum]) {
      map[reqNum] = findSet(sortedNums.slice(i+1), reqNum);
    }
    if (map[reqNum].length) {
      res.push(...map[reqNum]);
      map[reqNum] = [];
    }
    i++;
  }
  return res;
}

function findSet(nums, req) {
  let i=0
  let j=nums.length;
  let res=[];
  let prevsVal;
  while (i<j) {
    const sum = nums[i] + nums[j];
    if (sum === req && prevsVal !== nums[i]) {
      prevsVal = nums[i];
      res.push([0-req, nums[i], nums[j]]);
      i++;
      j--;
    }
    else if (sum < req) {
      i++;
    } else {
      j--;
    }
  }
  return res;
}