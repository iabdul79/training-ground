/*
Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

For example, the following two linked lists begin to intersect at node c1:
*/


const getIntersectionNode = function(headA, headB) {
  let a = headA;
  let b = headB;
  while (a!=b) {
    a = a ? a.next : headB;
    b = b ? b.next : headA;
  }
  return a;
};