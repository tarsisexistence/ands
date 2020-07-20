import { ListNode, ListNodeNext, TreeNode } from '../../utils/node';
import { createList } from './createList';

describe('[Other] createList', () => {
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
    expect(createList([1, 2, 3])).toEqual(new ListNodeNext(1, new ListNodeNext(2, new ListNodeNext(3))));
  });

  test('should return head with its list + intermediate null value', () => {
    expect(createList([1, 2, null, 3])).toEqual(
      new ListNodeNext(1, new ListNodeNext(2, new ListNodeNext(null, new ListNodeNext(3))))
    );
  });
});
