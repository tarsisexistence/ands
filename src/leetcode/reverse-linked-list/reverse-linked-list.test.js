import { reverseList } from './reverse-linked-list';
import { ListNode, ListNodeNext } from '../../utils/node';

describe('[Leetcode] reverseList', () => {
  test('example #1', () => {
    expect(
      reverseList(
        new ListNodeNext(1, new ListNodeNext(2, new ListNodeNext(3, new ListNodeNext(4, new ListNodeNext(5)))))
      )
    ).toEqual(new ListNodeNext(5, new ListNodeNext(4, new ListNodeNext(3, new ListNodeNext(2, new ListNodeNext(1))))));
  });

  test('example #2', () => {
    expect(reverseList(null)).toBe(null);
  });

  test('example #3', () => {
    expect(reverseList(new ListNode(1))).toEqual(new ListNode(1));
  });
});
