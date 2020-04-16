import { checkValidString } from './valid-parenthesis-string';

describe('[Leetcode] checkValidString', () => {
  test('example #1', () => {
    expect(checkValidString('()')).toBe(true);
  });

  test('example #2', () => {
    expect(checkValidString('(*)')).toBe(true);
  });

  test('example #3', () => {
    expect(checkValidString('(*))')).toBe(true);
  });

  test('example #4', () => {
    expect(checkValidString(')(')).toBe(false);
  });

  test('example #5', () => {
    expect(checkValidString('((*(*)')).toBe(true);
  });

  test('example #6', () => {
    expect(checkValidString('((*(*)*)')).toBe(true);
  });

  test('example #7', () => {
    expect(checkValidString('((*(*))*')).toBe(true);
  });

  test('example #8', () => {
    expect(checkValidString('((*(*))*(')).toBe(false);
  });
});
