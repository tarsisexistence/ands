import { minimumOperations } from './make-array-zero-by-subtracting-equal-amounts';

describe('[Leetcode] minimumOperations', () => {
  test('example #1', () => {
    expect(minimumOperations([1, 5, 0, 3, 5])).toBe(3);
  });

  test('example #2', () => {
    expect(minimumOperations([0])).toBe(0);
  });

  test('example #3', () => {
    expect(minimumOperations([5, 5, 0, 6, 2])).toBe(3);
  });
});
