import { removeElements } from './remove-linked-list-elements';
import { createList } from '../../other/createList/createList';

describe('[Leetcode] removeElements', () => {
  test('example #1', () => {
    expect(removeElements(createList([1, 2, 6, 3, 4, 5, 6]), 6)).toEqual(createList([1, 2, 3, 4, 5]));
  });

  test('example #2', () => {
    expect(removeElements(createList([1, 2, 3, 4, 5]), 6)).toEqual(createList([1, 2, 3, 4, 5]));
  });

  test('example #3', () => {
    expect(removeElements(createList([]), 6)).toEqual(createList([]));
  });

  test('example #4', () => {
    expect(removeElements(createList([6]), 6)).toEqual(createList([]));
  });

  test('example #5', () => {
    expect(removeElements(createList([6, 6, 1, 6]), 6)).toEqual(createList([1]));
  });

  test('example #6', () => {
    expect(removeElements(createList([6, 6, 6]), 6)).toEqual(createList([]));
  });
});
