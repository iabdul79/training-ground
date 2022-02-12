/*
You have a long flowerbed in which some of the plots are planted, and some are not.
However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n,
return if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule.
*/

function canPlaceFlowers(f, n) {
  let count=0;
  const fb = [0, ...f, 0];
  for (let i=1; i<fb.length-1; i++) {
    if (fb[i-1] === 0 && fb[i] === 0 && fb[i+1] === 0) {
      n--;
      if (n<=0) {
        return true;
      }
    }
  }
  return n <= 0;
}