import { findDisappearedNumbers } from './find-all-numbers-disappeared-in-an-array';

describe('[Leetcode] findKDistantIndices', () => {
  test('example #1', () => {
    expect(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])).toEqual([5, 6]);
  });

  test('example #2', () => {
    expect(findDisappearedNumbers([1, 1])).toEqual([2]);
  });
});
