import { minOperations } from './minimum-operations-to-exceed-threshold-value-i';

describe('[Leetcode] minOperations', () => {
  test('example #1', () => {
    expect(minOperations([2, 11, 10, 1, 3], 10)).toBe(3);
  });

  test('example #2', () => {
    expect(minOperations([1, 1, 2, 4, 9], 1)).toBe(0);
  });

  test('example #3', () => {
    expect(minOperations([1, 1, 2, 4, 9], 9)).toBe(4);
  });
});
