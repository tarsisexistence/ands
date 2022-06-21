import { countVowelSubstrings } from './count-vowel-substrings-of-a-string';

describe('[Leetcode] countVowelSubstrings', () => {
  test('example #1', () => {
    expect(countVowelSubstrings('aeiouu')).toBe(2);
  });

  test('example #2', () => {
    expect(countVowelSubstrings('unicornarihan')).toBe(0);
  });

  test('example #3', () => {
    expect(countVowelSubstrings('cuaieuouac')).toBe(7);
  });

  test('example #4', () => {
    expect(countVowelSubstrings('aeiouxaeiou')).toBe(2);
  });
});
