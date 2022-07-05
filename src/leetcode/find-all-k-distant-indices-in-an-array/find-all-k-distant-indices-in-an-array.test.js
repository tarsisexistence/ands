import { findKDistantIndices } from './find-all-k-distant-indices-in-an-array';

describe('[Leetcode] findKDistantIndices', () => {
  test('example #1', () => {
    expect(findKDistantIndices([3, 4, 9, 1, 3, 9, 5], 9, 1)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('example #2', () => {
    expect(findKDistantIndices([2, 2, 2, 2, 2], 2, 2)).toEqual([0, 1, 2, 3, 4]);
  });
});
