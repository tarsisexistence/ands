import { makeFancyString } from './delete-characters-to-make-fancy-string';

describe('[Leetcode] makeFancyString', () => {
  test('example #1', () => {
    expect(makeFancyString('leeetcode')).toBe('leetcode');
  });

  test('example #2', () => {
    expect(makeFancyString('aaabaaaa')).toBe('aabaa');
  });

  test('example #3', () => {
    expect(makeFancyString('aab')).toBe('aab');
  });
});
