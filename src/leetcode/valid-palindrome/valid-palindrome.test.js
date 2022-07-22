import { isPalindrome } from './valid-palindrome';

describe('[Leetcode] isPalindrome', () => {
  test('example #1', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
  });

  test('example #2', () => {
    expect(isPalindrome('race a car')).toBe(false);
  });

  test('example #3', () => {
    expect(isPalindrome(' ')).toBe(true);
  });
});
