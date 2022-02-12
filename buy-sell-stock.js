/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
*/

const maxProfit = (p) => {
  let min = p[0];
  let max = 0;
  for (let i=1; i<p.length; i++) {
    if (min > p[i]) {
      min = p[i];
    } else if (p[i]-min > max) {
      max = p[i]-min;
    }
  }
  return max;
};