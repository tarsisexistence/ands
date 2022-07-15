import { findTheDifference } from './find-the-difference';

describe('[Leetcode] findTheDifference', () => {
  test('example #1', () => {
    expect(findTheDifference('abcd', 'abcde')).toBe('e');
  });

  test('example #2', () => {
    expect(findTheDifference('', 'y')).toBe('y');
  });
});
