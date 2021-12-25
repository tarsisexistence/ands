import { reversePrefix } from './reverse-prefix-of-word';

describe('[Leetcode] reversePrefix', () => {
  test('example #1', () => {
    expect(reversePrefix('abcdefd', 'd')).toBe('dcbaefd');
  });

  test('example #2', () => {
    expect(reversePrefix('xyxzxe', 'z')).toBe('zxyxxe');
  });

  test('example #3', () => {
    expect(reversePrefix('abcd', 'z')).toBe('abcd');
  });
});
