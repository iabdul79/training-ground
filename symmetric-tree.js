/*
Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const isSymmetricRec = (root) => {
  if (root) {
    return recurse(root.left, root.right);
  }
  return true;
}

const recurse = (left, right) => {
  if (left === null || right === null) {
    return left === right;
  }
  if (left.val !== right.val) {
    return false;
  }
  return recurse(left.left, right.right) && recurse(left.right, right.left);
}

const isSymmetricItr = (root) => {
  const stack = [];
  if (!root) {
    return true;
  }
  stack.push(root.right);
  stack.push(root.left);
  while (stack.length) {
    let l = stack.pop();
    let r = stack.pop();
    if (!l && !r) {
      continue;
    }
    if (!l || !r || l.val !== r.val) {
      return false;
    }
    stack.push(r.left);
    stack.push(l.right);
    stack.push(r.right);
    stack.push(l.left);
  }
  return true;
}