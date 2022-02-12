/*
Given the root of a binary tree, return the inorder traversal of its nodes' values.
*/

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}


const inorderTraversal = (root) => {
  const res = [];
  const nodeStack = [];
  let node = root;
  while (node || nodeStack.length) {
    while (node) {
      nodeStack.push(node);
      node = node.left;
    }
    node = nodeStack.pop();
    res.push(node.val);
    node = node.right;
  }
  return res;
}