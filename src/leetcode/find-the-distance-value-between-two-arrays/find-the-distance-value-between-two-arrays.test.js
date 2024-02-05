import { findTheDistanceValue } from './find-the-distance-value-between-two-arrays';

describe('[Leetcode] findTheDistanceValue', () => {
  test('example #1', () => {
    expect(findTheDistanceValue([4, 5, 8], [10, 9, 1, 8], 2)).toBe(2);
  });

  test('example #2', () => {
    expect(findTheDistanceValue([1, 4, 2, 3], [-4, -3, 6, 10, 20, 30], 3)).toBe(2);
  });

  test('example #3', () => {
    expect(findTheDistanceValue([2, 1, 100, 3], [-5, -2, 10, -3, 7], 6)).toBe(1);
  });
});
