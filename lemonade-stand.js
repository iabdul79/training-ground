/*At a lemonade stand, each lemonade costs $5.
Customers are standing in a queue to buy from you, and order one at a time (in the order specified by bills).
Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill.
You must provide the correct change to each customer so that the net transaction is that the customer pays $5.
Note that you don't have any change in hand at first.
Given an integer array bills where bills[i] is the bill the ith customer pays,
return true if you can provide every customer with correct change, or false otherwise.
*/

function lemonadeChange(bills) {
  let net=[0,0];
  for(let i=0; i<bills.length; i++) {
    if (bills[i] === 10) {
      net[1]++;
      if (!net[0]) {
        return false;
      }
      net[0]--;
    } else if (bills[i] === 20) {
      if (net[1]>0 && net[0]>0) {
        net[0]--;
        net[1]--;
      } else if (net[0]>=3) {
        net[0]-=3;
      } else {
        return false;
      }
      
    } else {
      net[0]++;
    }
  }
  return true;
}