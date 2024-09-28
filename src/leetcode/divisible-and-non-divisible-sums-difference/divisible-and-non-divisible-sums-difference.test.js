import { differenceOfSums } from './divisible-and-non-divisible-sums-difference';

describe('[Leetcode] differenceOfSums', () => {
  test('example #1', () => {
    expect(differenceOfSums(10, 3)).toBe(19);
  });

  test('example #2', () => {
    expect(differenceOfSums(5, 6)).toBe(15);
  });
});
