import { merge } from './merge-sorted-array';

describe('[Leetcode] mergeSortedArray', () => {
  test('example #1', () => {
    const arr = [1, 2, 3, 0, 0, 0];
    merge(arr, 3, [2, 5, 6], 3);
    expect(arr).toEqual([1, 2, 2, 3, 5, 6]);
  });

  test('example #2', () => {
    const arr = [1];
    merge(arr, 1, [0], 0);
    expect(arr).toEqual([1]);
  });

  test('example #3', () => {
    const arr = [0];
    merge(arr, 0, [1], 1);
    expect(arr).toEqual([1]);
  });

  test('example #4', () => {
    const arr = [2, 0];
    merge(arr, 1, [1], 1);
    expect(arr).toEqual([1, 2]);
  });
});
