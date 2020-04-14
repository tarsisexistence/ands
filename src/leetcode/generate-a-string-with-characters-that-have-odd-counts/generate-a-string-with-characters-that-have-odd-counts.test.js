// these tests are slightly synthetic
// at least they don't change the problem essence
import { generateTheString } from './generate-a-string-with-characters-that-have-odd-counts';

describe('[Leetcode] generateTheString', () => {
  test('example #1', () => {
    expect(generateTheString(4)).toBe('aaab');
  });

  test('example #2', () => {
    expect(generateTheString(2)).toBe('ab');
  });

  test('example #3', () => {
    expect(generateTheString(7)).toBe('aaaaaaa');
  });
});
