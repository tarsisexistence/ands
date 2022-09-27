import { reformat } from './reformat-the-string';

describe('[Leetcode] reformat', () => {
  test('example #1', () => {
    expect(reformat('a0b1c2')).toBe('0a1b2c');
  });

  test('example #2', () => {
    expect(reformat('leetcode')).toBe('');
  });

  test('example #3', () => {
    expect(reformat('1229857369')).toBe('');
  });

  test('example #4', () => {
    expect(reformat('a0b1c2d')).toBe('a0b1c2d');
  });

  test('example #5', () => {
    expect(reformat('a0b1c2x')).toBe('a0b1c2x');
  });
});
