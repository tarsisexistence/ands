import { isSubsequence } from './is-subsequence';

describe('[Leetcode] isSubsequence', () => {
  test('example #1', () => {
    expect(isSubsequence('abc', 'ahbgdc')).toBeTruthy();
  });

  test('example #2', () => {
    expect(isSubsequence('axc', 'ahbgdc')).toBeFalsy();
  });

  test('example #3', () => {
    expect(isSubsequence('', 'ahbgdc')).toBeTruthy();
  });

  test('example #4', () => {
    expect(isSubsequence('', '')).toBeTruthy();
  });

  test('example #5', () => {
    expect(isSubsequence('abc', '')).toBeFalsy();
  });

  test('example #6', () => {
    expect(isSubsequence('bb', 'ahbgdc')).toBeFalsy();
  });
});
