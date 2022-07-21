import { isValid } from './valid-parentheses';

describe('[Leetcode] isAnagram', () => {
  test('example #1', () => {
    expect(isValid('()')).toBe(true);
  });

  test('example #2', () => {
    expect(isValid('()[]{}')).toBe(true);
  });

  test('example #3', () => {
    expect(isValid('(]')).toBe(false);
  });

  test('example #4', () => {
    expect(isValid('([){}]')).toBe(false);
  });

  test('example #5', () => {
    expect(isValid('{[]}')).toBe(true);
  });

  test('example #6', () => {
    expect(isValid('{()([])}')).toBe(true);
  });

  test('example #7', () => {
    expect(isValid('(')).toBe(false);
  });

  test('example #8', () => {
    expect(isValid(')')).toBe(false);
  });

  test('example #9', () => {
    expect(isValid('[)')).toBe(false);
  });
});
