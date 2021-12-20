import { halvesAreAlike } from './determine-if-string-halves-are-alike';

describe('[Leetcode] halvesAreAlike', () => {
  test('example #1', () => {
    expect(halvesAreAlike('book')).toBe(true);
  });

  test('example #2', () => {
    expect(halvesAreAlike('textbook')).toBe(false);
  });

  test('example #3', () => {
    expect(halvesAreAlike('MerryChristmas')).toBe(false);
  });

  test('example #4', () => {
    expect(halvesAreAlike('AbCdEfGh')).toBe(true);
  });
});
