import { differenceOfSum } from './difference-between-element-sum-and-digit-sum-of-an-array';

describe('[Leetcode] differenceOfSum', () => {
  test('example #1', () => {
    expect(differenceOfSum([1, 15, 6, 3])).toBe(9);
  });

  test('example #2', () => {
    expect(differenceOfSum([1, 2, 3, 4])).toBe(0);
  });
});
