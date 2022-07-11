import { titleToNumber } from './excel-sheet-column-number';

describe('[Leetcode] titleToNumber', () => {
  test('example #1', () => {
    expect(titleToNumber('A')).toBe(1);
  });

  test('example #2', () => {
    expect(titleToNumber('AB')).toBe(28);
  });

  test('example #3', () => {
    expect(titleToNumber('ZY')).toBe(701);
  });
});
