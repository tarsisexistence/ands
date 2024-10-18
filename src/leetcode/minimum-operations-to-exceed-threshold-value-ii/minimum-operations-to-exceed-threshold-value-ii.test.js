import { minOperations } from './minimum-operations-to-exceed-threshold-value-ii';

describe('[Leetcode] minOperations 2', () => {
  test('example #1', () => {
    expect(minOperations([2, 11, 10, 1, 3], 10)).toBe(2);
  });

  test('example #2', () => {
    expect(minOperations([1, 1, 2, 4, 9], 20)).toBe(4);
  });

  test('example #3', () => {
    expect(minOperations([97, 73, 5, 78], 98)).toBe(3);
  });
});
