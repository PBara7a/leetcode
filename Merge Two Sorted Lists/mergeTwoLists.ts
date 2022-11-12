class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  const head: ListNode = new ListNode();
  let lastNode = head;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      lastNode.next = list1;
      list1 = list1.next;
    } else {
      lastNode.next = list2;
      list2 = list2.next;
    }
    lastNode = lastNode.next;
  }

  if (list1) {
    lastNode.next = list1;
  } else if (list2) {
    lastNode.next = list2;
  }

  return head.next;
}
