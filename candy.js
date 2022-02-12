/*There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.
You are giving candies to these children subjected to the following requirements:
Each child must have at least one candy.
Children with a higher rating get more candies than their neighbors.
Return the minimum number of candies you need to have to distribute the candies to the children.
*/

function candy(r) {
  const c=r.length;
  let have=[1];
  for (let i=1; i<c; i++) {
    have[i]=1;
    if (r[i-1] > r[i]) {
      let j=i;
      let add=0;
      while(j>0 && r[j-1] > r[j] && have[j-1] <= have[j]) {
        have[j-1] = have[j-1]+1;
        j--;
      }
    } else if (r[i-1] < r[i]) {
      have[i] = have[i-1]+1;
    }
  }
  return have.reduce((sum,num)=> sum+=num, 0);
}