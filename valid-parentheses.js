/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
determine if the input string is valid.
An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
*/

function isValid(s) {
  const stack = [];
  for (let i=0; i<s.length; i++) {
    const c=s[i];
    if (c === '(' || c === '{' || c === '[') {
      stack.push(c);
    } else {
      const d = stack.pop();
      if ((d === '(' && c === ')') || (d === '{' && c === '}') || (d === '[' && c === ']')) {
        continue;
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}