import { canBeIncreasing } from './remove-one-element-to-make-the-array-strictly-increasing';

describe('[Leetcode] canBeIncreasing', () => {
  test('example #1', () => {
    expect(canBeIncreasing([1, 2, 10, 5, 7])).toBe(true);
  });

  test('example #2', () => {
    expect(canBeIncreasing([2, 3, 1, 2])).toBe(false);
  });

  test('example #3', () => {
    expect(canBeIncreasing([1, 1, 1])).toBe(false);
  });
});
