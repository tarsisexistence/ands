import { isStrictlyPalindromic } from './strictly-palindromic-number';

describe('[Leetcode] isStrictlyPalindromic', () => {
  test('example #1', () => {
    expect(isStrictlyPalindromic(9)).toBe(false);
  });

  test('example #2', () => {
    expect(isStrictlyPalindromic(4)).toBe(false);
  });
});
