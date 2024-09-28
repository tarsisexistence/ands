import { findWordsContaining } from './find-words-containing-character';

describe('[Leetcode] findWordsContaining', () => {
  test('example #1', () => {
    expect(findWordsContaining(['leet', 'code'], 'e')).toEqual([0, 1]);
  });

  test('example #2', () => {
    expect(findWordsContaining(['abc', 'bcd', 'aaaa', 'cbc'], 'a')).toEqual([0, 2]);
  });
});
