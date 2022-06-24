import { reformatNumber } from './reformat-phone-number';

describe('[Leetcode] reformatNumber', () => {
  test('example #1', () => {
    expect(reformatNumber('1-23-45 6')).toBe('123-456');
  });

  test('example #2', () => {
    expect(reformatNumber('123 4-567')).toBe('123-45-67');
  });

  test('example #3', () => {
    expect(reformatNumber('123 4-5678')).toBe('123-456-78');
  });
});
