import { checkString } from './check-if-all-as-appears-before-all-bs';

describe('[Leetcode] checkString', () => {
  test('example #1', () => {
    expect(checkString('aaabbb')).toBe(true);
  });

  test('example #2', () => {
    expect(checkString('abab')).toBe(false);
  });

  test('example #3', () => {
    expect(checkString('bbb')).toBe(true);
  });
});
