import { longestCommonPrefix } from './longest-common-prefix';

describe('[Leetcode] longestCommonPrefix', () => {
  test('example #1', () => {
    expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toBe('fl');
  });

  test('example #2', () => {
    expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toBe('');
  });
});
