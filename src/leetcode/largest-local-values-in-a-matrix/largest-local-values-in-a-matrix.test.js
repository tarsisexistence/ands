import { largestLocal } from './largest-local-values-in-a-matrix';

describe('[Leetcode] largestDivisibleSubset', () => {
  test('example #1', () => {
    expect(
      largestLocal([
        [9, 9, 8, 1],
        [5, 6, 2, 6],
        [8, 2, 6, 4],
        [6, 2, 2, 2]
      ])
    ).toEqual([
      [9, 9],
      [8, 6]
    ]);
  });

  test('example #2', () => {
    expect(
      largestLocal([
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 2, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1]
      ])
    ).toEqual([
      [2, 2, 2],
      [2, 2, 2],
      [2, 2, 2]
    ]);
  });
});
