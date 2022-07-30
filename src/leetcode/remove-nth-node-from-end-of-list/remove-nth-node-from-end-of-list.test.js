import { createList } from '../../other/create-list/create-list';
import { removeNthFromEnd } from './remove-nth-node-from-end-of-list';

describe('[Leetcode] removeNthFromEnd', () => {
  test('example #1', () => {
    expect(removeNthFromEnd(createList([1, 2, 3, 4, 5]), 2)).toEqual(createList([1, 2, 3, 5]));
  });

  test('example #2', () => {
    expect(removeNthFromEnd(createList([1, 2]), 1)).toEqual(createList([1]));
  });

  test('example #3', () => {
    expect(removeNthFromEnd(createList([1]), 1)).toEqual(createList([]));
  });

  test('example #4', () => {
    expect(removeNthFromEnd(createList([1, 2]), 2)).toEqual(createList([2]));
  });
});
