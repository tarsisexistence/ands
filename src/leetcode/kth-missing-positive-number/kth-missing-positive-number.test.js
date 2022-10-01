import { findKthPositive } from './kth-missing-positive-number';

describe('[Leetcode] findKthPositive', () => {
  test('example #1', () => {
    expect(findKthPositive([2, 3, 4, 7, 11], 5)).toBe(9);
  });

  test('example #2', () => {
    expect(findKthPositive([1, 2, 3, 4], 2)).toBe(6);
  });
});
