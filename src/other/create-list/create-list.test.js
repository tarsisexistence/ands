import { ListNode } from '../../utils/node';
import { createList } from './create-list';

describe('[Other] create-list', () => {
  test('should return null', () => {
    expect(createList([])).toBe(null);
  });

  test('should return head with single number', () => {
    expect(createList([1])).toEqual(new ListNode(1));
  });

  test('should return head with single char', () => {
    expect(createList(['1'])).toEqual(new ListNode('1'));
  });

  test('should return head with its list', () => {
    expect(createList([1, 2, 3])).toEqual(new ListNode(1, new ListNode(2, new ListNode(3))));
  });

  test('should return head with its list + intermediate null value', () => {
    expect(createList([1, 2, null, 3])).toEqual(new ListNode(1, new ListNode(2, new ListNode(null, new ListNode(3)))));
  });
});
