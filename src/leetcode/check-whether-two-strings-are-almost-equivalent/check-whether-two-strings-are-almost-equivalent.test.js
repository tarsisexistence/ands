import { checkAlmostEquivalent } from './check-whether-two-strings-are-almost-equivalent';

describe('[Leetcode] checkAlmostEquivalent', () => {
  test('example #1', () => {
    expect(checkAlmostEquivalent('aaaa', 'bccb')).toBe(false);
  });

  test('example #2', () => {
    expect(checkAlmostEquivalent('abcdeef', 'abaaacc')).toBe(true);
  });

  test('example #3', () => {
    expect(checkAlmostEquivalent('cccddabba', 'babababab')).toBe(true);
  });

  test('example #4', () => {
    expect(checkAlmostEquivalent('aaaa', 'bbbb')).toBe(false);
  });

  test('example #5', () => {
    expect(checkAlmostEquivalent('aaa', 'bbb')).toBe(true);
  });

  test('example #6', () => {
    expect(checkAlmostEquivalent('zzzyyy', 'iiiiii')).toBe(false);
  });
});
