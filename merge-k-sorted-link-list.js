/*
You are given an array of k linked-lists lists,
each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

 const mergeKLists = (lists) => {
  const len = lists.length;
  if (len < 2) {
    return lists[0] ?? null;
  } else if (len === 2) {
    return mergeList(lists);
  } else {
    const mid = parseInt(len/2);
    const ll = mergeKLists(lists.slice(0, mid));
    const rl = mergeKLists(lists.slice(mid, len));
    return mergeList([ll, rl]);
  }
};

const mergeList = (lists) => {
  let l1 = lists[0];
  let l2 = lists[1];
  let head = new ListNode();
  const root = head;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      head.next = l1;
      head = head.next;
      l1 = l1.next;
    } else {
      head.next = l2;
      head = head.next;
      l2 = l2.next;
    }
  }
  if (l1) {
    head.next = l1;
  } else if (l2) {
    head.next = l2;
  }
  return root.next;
}