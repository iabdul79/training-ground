/*
Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.
*/

const longestValidParentheses = (s) => {
  const stack = [-1];
  const len = s.length;
  let i=0;
  let count = 0;
  while (i<len) {
    if (s[i] === '(') {
      stack.push(i);
    } else {
      stack.pop();
      if (!stack.length) {
        stack.push(i);
      } else {
        count = Math.max(count, i-stack[stack.length-1]);
      }
    }
    i++;
  }
  return count;
};