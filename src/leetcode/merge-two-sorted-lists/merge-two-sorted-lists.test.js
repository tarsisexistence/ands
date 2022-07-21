import { ListNode } from '../../utils/node';
import { mergeTwoLists } from './merge-two-sorted-lists';

describe('[Leetcode] mergeTwoLists', () => {
  test('example #1', () => {
    expect(
      mergeTwoLists(
        new ListNode(1, new ListNode(2, new ListNode(4))),
        new ListNode(1, new ListNode(3, new ListNode(4)))
      )
    ).toEqual(new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4)))))));
  });

  test('example #2', () => {
    expect(mergeTwoLists(new ListNode().next, new ListNode().next)).toEqual(new ListNode().next);
  });

  test('example #3', () => {
    expect(mergeTwoLists(new ListNode().next, new ListNode(0))).toEqual(new ListNode(0));
  });
});
