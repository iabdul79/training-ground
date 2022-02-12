/*
Given n pairs of parentheses,
write a function to generate all combinations of well-formed parentheses.
*/

const generateParenthesis = (n) => {
  const res = [];
  parenthesis(res, '', 0, 0, n);
    return res;
}

const parenthesis = (res, str, op, cp, n) => {
  if (str.length === 2*n) {
    res.push(str);
    return;
  }
  if (op < n) {
    parenthesis(res, `${str}(`, op+1, cp, n);
  }
  if (cp < op) {
    parenthesis(res, `${str})`, op, cp+1, n);
  }
}