import { findPermutationDifference } from './permutation-difference-between-two-strings';

describe('[Leetcode] findPermutationDifference', () => {
  test('example #1', () => {
    expect(findPermutationDifference('abc', 'bac')).toBe(2);
  });

  test('example #2', () => {
    expect(findPermutationDifference('abcde', 'edbac')).toBe(12);
  });
});
