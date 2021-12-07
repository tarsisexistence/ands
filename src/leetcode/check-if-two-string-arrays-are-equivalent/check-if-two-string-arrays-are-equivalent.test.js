import { arrayStringsAreEqual } from './check-if-two-string-arrays-are-equivalent';

describe('[Leetcode] arrayStringsAreEqual', () => {
  test('example #1', () => {
    expect(arrayStringsAreEqual(['ab', 'c'], ['a', 'bc'])).toBe(true);
  });

  test('example #2', () => {
    expect(arrayStringsAreEqual(['a', 'cb'], ['ab', 'c'])).toBe(false);
  });

  test('example #3', () => {
    expect(arrayStringsAreEqual(['abc', 'd', 'defg'], ['abcddefg'])).toBe(true);
  });
});
