import { canBeTypedWords } from './maximum-number-of-words-you-can-type';

describe('[Leetcode] canBeTypedWords', () => {
  test('example #1', () => {
    expect(canBeTypedWords('hello world', 'ad')).toBe(1);
  });

  test('example #2', () => {
    expect(canBeTypedWords('leet code', 'lt')).toBe(1);
  });

  test('example #3', () => {
    expect(canBeTypedWords('leet code', 'e')).toBe(0);
  });
});
