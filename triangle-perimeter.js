/*
Given an integer array nums, return the largest perimeter of a triangle with a non-zero area,
formed from three of these lengths. If it is impossible to form any triangle of a non-zero area, return 0.

Hint: non-zero area condition if a<=b<=c; then a+b > c
perimeter of triangle: a+b+c
*/

function largestPerimeter(n) {
  n.sort((a,b) => a-b);
  for (let i=n.length-1; i>1; i--) {
    if (n[i-1]+n[i-2] > n[i]) {
      return n[i]+n[i-1]+n[i-2];
    }
  }
  return 0;
}