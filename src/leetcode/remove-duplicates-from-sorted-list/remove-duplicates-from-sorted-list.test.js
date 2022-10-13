import { deleteDuplicates } from './remove-duplicates-from-sorted-list';
import { createList } from '../../other/create-list/create-list';

describe('[Leetcode] deleteDuplicates', () => {
  test('example #1', () => {
    expect(deleteDuplicates(createList([1, 1, 2]))).toEqual(createList([1, 2]));
  });

  test('example #2', () => {
    expect(deleteDuplicates(createList([1, 1, 2, 3, 3]))).toEqual(createList([1, 2, 3]));
  });
});
