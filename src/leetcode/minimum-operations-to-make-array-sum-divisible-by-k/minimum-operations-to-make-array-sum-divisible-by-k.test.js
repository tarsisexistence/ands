import { minOperations } from './minimum-operations-to-make-array-sum-divisible-by-k';

describe('[Leetcode] minOperations', () => {
  test('example #1', () => {
    expect(minOperations([3, 9, 7], 5)).toBe(4);
  });

  test('example #2', () => {
    expect(minOperations([4, 1, 3], 4)).toBe(0);
  });

  test('example #3', () => {
    expect(minOperations([3, 2], 6)).toBe(5);
  });
});
