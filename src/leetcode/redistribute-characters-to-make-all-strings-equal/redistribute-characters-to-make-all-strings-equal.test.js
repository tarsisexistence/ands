import { makeEqual } from './redistribute-characters-to-make-all-strings-equal';

describe('[Leetcode] makeEqual', () => {
  test('example #1', () => {
    expect(makeEqual(['abc', 'aabc', 'bc'])).toBe(true);
  });

  test('example #2', () => {
    expect(makeEqual(['ab', 'a'])).toBe(false);
  });
});
