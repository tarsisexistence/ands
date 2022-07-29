import { ListNode } from '../../utils/node';
import { mergeKLists } from './merge-k-sorted-lists';

describe('[Leetcode] mergeKLists', () => {
  test('example #1', () => {
    expect(
      mergeKLists([
        new ListNode(1, new ListNode(4, new ListNode(5))),
        new ListNode(1, new ListNode(3, new ListNode(4))),
        new ListNode(2, new ListNode(6))
      ])
    ).toEqual(
      new ListNode(
        1,
        new ListNode(
          1,
          new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4, new ListNode(5, new ListNode(6))))))
        )
      )
    );
  });

  test('example #2', () => {
    expect(mergeKLists([])).toBe(null);
  });
});
