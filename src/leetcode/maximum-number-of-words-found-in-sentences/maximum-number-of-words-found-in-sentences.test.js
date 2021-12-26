import { mostWordsFound } from './maximum-number-of-words-found-in-sentences';

describe('[Leetcode] mostWordsFound', () => {
  test('example #1', () => {
    expect(mostWordsFound(['alice and bob love leetcode', 'i think so too', 'this is great thanks very much'])).toBe(6);
  });

  test('example #2', () => {
    expect(mostWordsFound(['please wait', 'continue to fight', 'continue to win'])).toBe(3);
  });
});
