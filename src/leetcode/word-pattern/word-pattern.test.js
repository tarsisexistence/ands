import { wordPattern } from './word-pattern';

describe('[Leetcode] wordPattern', () => {
  test('example #1', () => {
    expect(wordPattern('abba', 'dog cat cat dog')).toBe(true);
  });

  test('example #2', () => {
    expect(wordPattern('abba', 'dog cat cat fish')).toBe(false);
  });

  test('example #3', () => {
    expect(wordPattern('aaaa', 'dog cat cat dog')).toBe(false);
  });

  test('example #4', () => {
    expect(wordPattern('abba', 'dog dog dog dog')).toBe(false);
  });

  test('example #5', () => {
    expect(wordPattern('abbaz', 'dog cat cat dog cat')).toBe(false);
  });

  test('example #6', () => {
    expect(wordPattern('a', 'dog dog')).toBe(false);
  });
});
