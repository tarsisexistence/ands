import { minOperations } from './minimum-operations-to-make-the-array-increasing';

describe('[Leetcode] minOperations', () => {
  test('example #1', () => {
    expect(minOperations([1, 1, 1])).toBe(3);
  });

  test('example #2', () => {
    expect(minOperations([1, 5, 2, 4, 1])).toBe(14);
  });

  test('example #3', () => {
    expect(minOperations([8])).toBe(0);
  });
});
