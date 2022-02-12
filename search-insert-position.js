/*
Given a sorted array of distinct integers and a target value, return the index if the target is found.
If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.
*/


const searchInsert = (n, target) => {
  let si = 0;
  let ei = n.length;
  while (si < ei) {
    const mid = si + Math.floor((ei-si)/2);
    if (target === n[mid]) {
      return mid;
    } else if (target < n[mid]) {
      ei = mid;
    } else {
      si = mid;
    }
  }
  return si;
}

//Wrong