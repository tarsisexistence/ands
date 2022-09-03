import { isMonotonic } from './monotonic-array';

describe('[Leetcode] isMonotonic', () => {
  test('example #1', () => {
    expect(isMonotonic([1, 2, 2, 3])).toBe(true);
  });

  test('example #2', () => {
    expect(isMonotonic([6, 5, 4, 4])).toBe(true);
  });

  test('example #3', () => {
    expect(isMonotonic([1, 3, 2])).toBe(false);
  });

  test('example #4', () => {
    expect(isMonotonic([2, 2, 2])).toBe(true);
  });
});
