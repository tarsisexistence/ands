import { rotateString } from './rotate-string';

describe('[Leetcode] rotateString', () => {
  test('example #1', () => {
    expect(rotateString('abcde', 'cdeab')).toBe(true);
  });

  test('example #2', () => {
    expect(rotateString('abcde', 'abced')).toBe(false);
  });
});
