import { findMaxK } from './largest-positive-integer-that-exists-with-its-negative';

describe('[Leetcode] findMaxK', () => {
  test('example #1', () => {
    expect(findMaxK([-1, 2, -3, 3])).toBe(3);
  });

  test('example #2', () => {
    expect(findMaxK([-1, 10, 6, 7, -7, 1])).toBe(7);
  });

  test('example #3', () => {
    expect(findMaxK([-10, 8, 6, 7, -2, -3])).toBe(-1);
  });
});
