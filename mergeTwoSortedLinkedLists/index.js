// Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.

var mergeTwoLists = function (l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;

  if (l1.val < l2.val) {
    // Recursion is used here to keep comparing the next nodes of both lists
    // and linking the smaller one to the merged list
    // This continues until one of the lists is exhausted
    // Then, the remaining nodes of the other list are linked to the merged list
    // This ensures that the merged list remains sorted
    // Finally, the head of the merged list is returned
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    // This is the case where l1.val >= l2.val
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};
