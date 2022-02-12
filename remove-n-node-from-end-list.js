/*
Given the head of a linked list,
remove the nth node from the end of the list and return its head.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

 const removeNthFromEnd = (head, n) => {
  let len=1, curr=0;
  let s = head, e = head;
  while (e.next) {
    if (len > n && len-curr > n) {
      curr++;
      s=s.next;
    }
    len++;
    e=e.next;
  }
  if (len === n) {
    head = head.next;
  } else {
    const temp = s.next;
    s.next = temp?.next || null;
  }
  return head;
}
