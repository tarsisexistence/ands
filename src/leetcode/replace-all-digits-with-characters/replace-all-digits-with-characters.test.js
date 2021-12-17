import { replaceDigits } from './replace-all-digits-with-characters';

describe('[Leetcode] replaceDigits', () => {
  test('example #1', () => {
    expect(replaceDigits('a1c1e1')).toBe('abcdef');
  });

  test('example #2', () => {
    expect(replaceDigits('a1b2c3d4e')).toBe('abbdcfdhe');
  });
});
