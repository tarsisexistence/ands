import { findMaxAverage } from './maximum-average-subarray-i';

describe('[Leetcode] findMaxAverage', () => {
  test('example #1', () => {
    expect(findMaxAverage([1, 12, -5, -6, 50, 3], 4)).toBe(12.75);
  });
});
