import { largestOddNumber } from './largest-odd-number-in-string';

describe('[Leetcode] largestOddNumber', () => {
  test('example #1', () => {
    expect(largestOddNumber('52')).toBe('5');
  });

  test('example #2', () => {
    expect(largestOddNumber('4206')).toBe('');
  });

  test('example #3', () => {
    expect(largestOddNumber('35427')).toBe('35427');
  });

  test('example #4', () => {
    expect(largestOddNumber('354392')).toBe('35439');
  });

  test('example #5', () => {
    expect(largestOddNumber('239537672423884969653287101')).toBe('239537672423884969653287101');
  });
});
