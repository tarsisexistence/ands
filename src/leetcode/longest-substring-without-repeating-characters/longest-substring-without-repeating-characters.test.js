import { lengthOfLongestSubstring } from './longest-substring-without-repeating-characters';

describe('[Leetcode] lengthOfLongestSubstring', () => {
  test('example #1', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
  });

  test('example #2', () => {
    expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
  });

  test('example #3', () => {
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
  });

  test('example #4', () => {
    expect(lengthOfLongestSubstring('aab')).toBe(2);
  });

  test('example #5', () => {
    expect(lengthOfLongestSubstring('')).toBe(0);
  });

  test('example #6', () => {
    expect(lengthOfLongestSubstring('dvdf')).toBe(3);
  });
});
