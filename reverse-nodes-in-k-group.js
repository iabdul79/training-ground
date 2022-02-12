/*
Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

k is a positive integer and is less than or equal to the length of the linked list.
If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

You may not alter the values in the list's nodes, only nodes themselves may be changed.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/*** NOT COMPLETED ***/

const reverseKGroup = (head, k) => {
  const root = new ListNode();
  let i=k;
  let rNode = reverseList(head, k);
  let node = head;
  while (node && i--) {
    node.next = node;
  }

};

const reverseList = (head, k) => {
  const stack = [];
  let node = head;
  let i=k;
  while (node && i--) {
    stack.push(node);
    node = node.next;
  }
  if (i) {
    return head;
  }
  node = new ListNode();
  const root = node;
  while (stack.length) {
    node.next = stack.pop();
    node = node.next;
  }
  return root.next;
}