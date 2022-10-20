import { intToRoman } from './integer-to-roman';

describe('[Leetcode] intToRoman', () => {
  test('example #1', () => {
    expect(intToRoman(3)).toBe('III');
  });

  test('example #2', () => {
    expect(intToRoman(58)).toBe('LVIII');
  });

  test('example #3', () => {
    expect(intToRoman(1994)).toBe('MCMXCIV');
  });
});
