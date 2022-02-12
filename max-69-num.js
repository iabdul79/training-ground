/*
Given a positive integer num consisting only of digits 6 and 9.
Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).
*/

function maximum69Number(n) {
  let x=n;
  let i=0;
  let sixAt=-1;
  while (x>0) {
    if (x%10 === 6) {
      sixAt=i;
    }
    x=parseInt(x/10);
    i++;
  }
  return sixAt !== -1 ? n + 3*(10**sixAt) : n;
}