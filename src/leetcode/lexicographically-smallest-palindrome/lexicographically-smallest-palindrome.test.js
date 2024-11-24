import { makeSmallestPalindrome } from './lexicographically-smallest-palindrome';

describe('[Leetcode] makeSmallestPalindrome', () => {
  test('example #1', () => {
    expect(makeSmallestPalindrome('egcfe')).toBe('efcfe');
  });

  test('example #2', () => {
    expect(makeSmallestPalindrome('abcd')).toBe('abba');
  });

  test('example #3', () => {
    expect(makeSmallestPalindrome('seven')).toBe('neven');
  });
});
