/*
There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.
*/

const bSearch = (arr, t, s, e) => {
  while (e-s > 1) {
    let mid = parseInt((e-s)/2)+s;
    if (t === arr[mid]) {
      return mid;
    } else if (t<arr[mid]) {
      e=mid;
    } else {
      s=mid+1;
    }
  }
  if (arr[s] === t) {
    return s;
  }
  if (arr[e] === t) {
    return e;
  }
  return undefined;
}

const search = (nums, t) => {
  let lIndx = nums.length-1;
  while (lIndx > 0 && nums[0] > nums[lIndx]) {
    lIndx--;
  }
  return bSearch(nums, t, 0, lIndx) ?? bSearch(nums,t, lIndx, nums.length-1) ?? -1;
};