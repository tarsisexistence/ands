import { reverseList } from './reverse-linked-list';
import { ListNode } from '../../utils/node';

describe('[Leetcode] reverseList', () => {
  test('example #1', () => {
    expect(reverseList(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))))).toEqual(
      new ListNode(5, new ListNode(4, new ListNode(3, new ListNode(2, new ListNode(1)))))
    );
  });

  test('example #2', () => {
    expect(reverseList(null)).toBe(null);
  });

  test('example #3', () => {
    expect(reverseList(new ListNode(1))).toEqual(new ListNode(1));
  });
});
