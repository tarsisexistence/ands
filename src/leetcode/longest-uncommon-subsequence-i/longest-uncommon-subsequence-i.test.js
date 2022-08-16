import { findLUSlength } from './longest-uncommon-subsequence-i';

describe('[Leetcode] findLUSlength', () => {
  test('example #1', () => {
    expect(findLUSlength('aba', 'cdc')).toBe(3);
  });

  test('example #2', () => {
    expect(findLUSlength('aaa', 'bbb')).toBe(3);
  });

  test('example #3', () => {
    expect(findLUSlength('aaa', 'aaa')).toBe(-1);
  });
});
