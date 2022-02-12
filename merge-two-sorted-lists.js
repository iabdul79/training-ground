/*
Merge two sorted linked lists and return it as a sorted list.
The list should be made by splicing together the nodes of the first two lists.
*/

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val);
  this.next = (next===undefined ? null : next);
}

function mergeTwoLists(l1, l2) {
  let p1 = l1;
  let p2 = l2;
  let rl = new ListNode(0);
  let head = rl;
  while (p1 && p2) {
    if (p1.val < p2.val) {
      let node = new ListNode(p1.val);
      rl.next = node;
      rl = node;
      p1 = p1.next;
    } else {
      let node = new ListNode(p2.val);
      rl.next = node;
      rl = node;
      p2 = p2.next;
    }
  }
  let rml = p1 !== null ? p1 : p2;
  while (rml) {
    let node = new ListNode(rml.val);
    rl.next = node;
    rl = node;
    rml = rml?.next;
  }
  return head.next;
}