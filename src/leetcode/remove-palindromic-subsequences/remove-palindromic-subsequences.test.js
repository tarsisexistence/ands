import { removePalindromeSub } from './remove-palindromic-subsequences';

describe('[Leetcode] removeOuterParentheses', () => {
  test('example #1', () => {
    expect(removePalindromeSub('ababa')).toBe(1);
  });

  test('example #2', () => {
    expect(removePalindromeSub('abb')).toBe(2);
  });

  test('example #3', () => {
    expect(removePalindromeSub('baabb')).toBe(2);
  });

  test('example #4', () => {
    expect(removePalindromeSub('abaabb')).toBe(2);
  });
});
