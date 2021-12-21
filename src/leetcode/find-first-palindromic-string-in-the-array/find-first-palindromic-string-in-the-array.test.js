import { firstPalindrome } from './find-first-palindromic-string-in-the-array';

describe('[Leetcode] firstPalindrome', () => {
  test('example #1', () => {
    expect(firstPalindrome(['abc', 'car', 'ada', 'racecar', 'cool'])).toBe('ada');
  });

  test('example #2', () => {
    expect(firstPalindrome(['notapalindrome', 'racecar'])).toBe('racecar');
  });

  test('example #3', () => {
    expect(firstPalindrome(['def', 'ghi'])).toBe('');
  });
});
