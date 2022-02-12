/*
You are given an integer array prices where prices[i] is the price of a given stock on the ith day.
On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time.
However, you can buy it then immediately sell it on the same day.
Find and return the maximum profit you can achieve.
*/

function maxProfit(p) {
  let sell = false;
  let profits = 0;
  let d = 0;
  let currBuy = 0;
  while (d<p.length) {
    let nextPrice = p[d+1] || 0;
    if (!sell && nextPrice > p[d]) {
      currBuy = p[d];
      sell = true;
    } else if (sell && p[d]-currBuy > 0 && p[d]-currBuy > nextPrice-currBuy) {
      profits += p[d]-currBuy;
      sell = false;
    }
    d++
  }
  return profits;
}
