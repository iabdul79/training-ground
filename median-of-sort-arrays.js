// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.


// merge both arrays as merge sort
// find the median

function findMedianSortedArrays(nums1, nums2) {
  if (nums1.length === 0 && nums2.length === 0) {
    return 0;  
  }
    let result = [];
    let i = j = 0;
    while(i<nums1.length && j<nums2.length) {
      if (nums1[i] < nums2[j]) {
        result.push(nums1[i]);
        i++;
      } else {
        result.push(nums2[j]);
        j++;
      }
    }
    let num1Diff = nums1.length > 0 ? nums1.length - i : 0;
    if (num1Diff) {
      result.push(...nums1.slice(i))
    } else {
      result.push(...nums2.slice(j));
    }
    if (result.length === 1) {
      return result[0];
    }
    return result.length%2 ? result[Math.floor(result.length/2)] : (result[(result.length/2-1)]+result[(result.length/2)])/2;
}