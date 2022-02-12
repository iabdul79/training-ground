/*You are given an integer array nums. You are initially positioned at the array's first index,
and each element in the array represents your maximum jump length at that position.
Return true if you can reach the last index, or false otherwise.
*/

function canJump(nums) {
  const n=nums.length;
  let i = 0;
  for (let reach = 0; i < n && i <= reach; ++i) {
    reach = Math.max(i + nums[i], reach);
  }
  return i == n;
}