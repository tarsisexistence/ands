import { maxSubArray } from './maximum-subarray';

describe('[Leetcode] maxSubArray', () => {
  test('example #1', () => {
    expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
  });

  test('example #2', () => {
    expect(maxSubArray([-1])).toBe(-1);
  });

  test('example #3', () => {
    expect(maxSubArray([1])).toBe(1);
  });

  test('example #4', () => {
    expect(maxSubArray([-2, 1])).toBe(1);
  });

  test('example #5', () => {
    expect(maxSubArray([-2, -3, 4, -1, -2, 1, 5, -3])).toBe(7);
  });

  test('example #6', () => {
    expect(maxSubArray([10, -3, 5])).toBe(12);
  });

  test('example #7', () => {
    expect(maxSubArray([-10, -3, -5, -2, -6])).toBe(-2);
  });
});
