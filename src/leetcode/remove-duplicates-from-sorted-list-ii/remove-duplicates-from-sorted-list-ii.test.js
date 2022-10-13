import { createList } from '../../other/create-list/create-list';
import { deleteDuplicates } from './remove-duplicates-from-sorted-list-ii';

describe('[Leetcode] deleteDuplicates 2', () => {
  test('example #1', () => {
    expect(deleteDuplicates(createList([1, 2, 3, 3, 4, 4, 5]))).toEqual(createList([1, 2, 5]));
  });

  test('example #2', () => {
    expect(deleteDuplicates(createList([1, 1, 1, 2, 3]))).toEqual(createList([2, 3]));
  });

  test('example #3', () => {
    expect(deleteDuplicates(createList([1, 1]))).toEqual(createList([]));
  });

  test('example #4', () => {
    expect(deleteDuplicates(createList([1, 2, 2]))).toEqual(createList([1]));
  });

  test('example #5', () => {
    expect(deleteDuplicates(createList([1, 1, 2, 2]))).toEqual(createList([]));
  });
});
