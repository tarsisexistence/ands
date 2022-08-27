import { triangularSum } from './find-triangular-sum-of-an-array';

describe('[Leetcode] triangularSum', () => {
  test('example #1', () => {
    expect(triangularSum([1, 2, 3, 4, 5])).toBe(8);
  });

  test('example #2', () => {
    expect(triangularSum([5])).toBe(5);
  });
});
