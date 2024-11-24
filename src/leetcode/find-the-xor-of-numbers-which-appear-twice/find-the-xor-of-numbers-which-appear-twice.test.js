import { duplicateNumbersXOR } from './find-the-xor-of-numbers-which-appear-twice';

describe('[Leetcode] duplicateNumbersXOR', () => {
  test('example #1', () => {
    expect(duplicateNumbersXOR([1, 2, 1, 3])).toBe(1);
  });

  test('example #2', () => {
    expect(duplicateNumbersXOR([1, 2, 3])).toBe(0);
  });

  test('example #3', () => {
    expect(duplicateNumbersXOR([1, 2, 2, 1])).toBe(3);
  });
});
