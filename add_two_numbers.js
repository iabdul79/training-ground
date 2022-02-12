function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

var addTwoNumbers = function(l1, l2) {
  var carry = 0;
  var top;
  var head;
  while (l1 || l2) {
    var res = addTwoNodes(l1, l2, carry);
    carry = res > 9 ? 1 : 0;
    res = res%10;
    var newNode = new ListNode(res);
    if (!head) {
      head = newNode;
    } else {
      var tempNode = top;
      tempNode.next = newNode;
    }
    top = newNode;
    l1 = l1 && l1.next ? l1.next : null;
    l2 = l2 && l2.next ? l2.next : null;
  }
  if (carry) {
    top.next = new ListNode(1);
  }
  return head;
};

var addTwoNodes = function(n1, n2, carry) {
  var v1 = n1 && n1.val ? n1.val : 0;
  var v2 = n2 && n2.val ? n2.val : 0;
  return v1+v2+carry;
};

var createList = function(arr) {
  var head;
  var top;
  for (let i=0; i<arr.length; i++) {
    var newNode = new ListNode(arr[i]);
    if (!head) {
      head = newNode;
    } else {
      var tempNode = top;
      tempNode.next = newNode;
    }
    top = newNode;
  }
  return head;
}

var printList = function(list) {
  while(list) {
    console.log(list.val);
    list = list.next
  }
}