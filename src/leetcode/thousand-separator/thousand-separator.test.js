import { thousandSeparator } from './thousand-separator';

describe('[Leetcode] thousandSeparator', () => {
  test('example #1', () => {
    expect(thousandSeparator(987)).toBe('987');
  });

  test('example #2', () => {
    expect(thousandSeparator(1234)).toBe('1.234');
  });
});
