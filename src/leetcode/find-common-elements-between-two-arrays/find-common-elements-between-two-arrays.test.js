import { findIntersectionValues } from './find-common-elements-between-two-arrays';

describe('[Leetcode] findIntersectionValues', () => {
  test('example #1', () => {
    expect(findIntersectionValues([2, 3, 2], [1, 2])).toEqual([2, 1]);
  });

  test('example #2', () => {
    expect(findIntersectionValues([4, 3, 2, 3, 1], [2, 2, 5, 2, 3, 6])).toEqual([3, 4]);
  });
});
