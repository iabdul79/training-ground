/*
Given the root of a Binary Search Tree (BST),
convert it to a Greater Tree such that every key of the original BST is changed to the original key plus the sum of all keys greater than the original key in BST.
*/

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

const convertBST = function(root) {
  let sum=0;
  let node = root;
  const stack = [];
  while (stack.length || node) {
    while (node) {
      stack.push(node);
      node = node.right;
    }
    node = stack.pop();
    sum+=node.val;
    node.val = sum;

    node = node.left;
  }
  return root;
}

const recuseBST = function(root) {
  let sum=0;
  function recurse(root) {
    let node = root;
    if (node) {
      recurse(node.right);
      sum += node.val;
      node.val = sum;
      recurse(node.left);
    }
    return root;
  }
  return recurse(root);
}