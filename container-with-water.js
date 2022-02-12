/*
Given n non-negative integers a1, a2, ..., an ,
where each represents a point at coordinate (i, ai).
n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0).
Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.
*/

function maxArea(h) {
  const len = h.length;
  let i=0;
  let j=len-1;
  res=0;
  while (i<j) {
    const dist = j - i;
    const height = Math.min(h[j], h[i]);
    const area = dist*height;
    if (res < area) {
      res = area;
    }
    if (h[j] > h[i]) {
      i++;
    } else {
      j--;
    }
  }
  return res; 
}