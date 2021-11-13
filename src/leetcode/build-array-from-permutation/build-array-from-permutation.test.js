import { buildArray } from './build-array-from-permutation';

describe('[Leetcode] buildArray', () => {
  test('example #1', () => {
    expect(buildArray([0, 2, 1, 5, 3, 4])).toEqual([0, 1, 2, 4, 5, 3]);
  });

  test('example #2', () => {
    expect(buildArray([5, 0, 1, 2, 3, 4])).toEqual([4, 5, 0, 1, 2, 3]);
  });
});
