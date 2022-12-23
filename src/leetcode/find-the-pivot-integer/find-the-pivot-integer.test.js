import { pivotInteger } from './find-the-pivot-integer';

describe('[Leetcode] pivotInteger', () => {
  test('example #1', () => {
    expect(pivotInteger(8)).toBe(6);
  });

  test('example #2', () => {
    expect(pivotInteger(1)).toBe(1);
  });

  test('example #3', () => {
    expect(pivotInteger(4)).toBe(-1);
  });
});
