function isPalindrome(x) {
  if (x < 0) {
    return false;
  }
  let c = x;
  let r = 0;
  while (c!=0) {
    const d = c%10;
    c = Math.floor(c/10);
    r = r*10+d;
  }
  return x===r;
}