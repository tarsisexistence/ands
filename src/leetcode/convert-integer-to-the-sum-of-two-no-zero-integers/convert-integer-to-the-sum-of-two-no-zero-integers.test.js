import { getNoZeroIntegers } from './convert-integer-to-the-sum-of-two-no-zero-integers';

describe('[Leetcode] getNoZeroIntegers', () => {
  test('example #1', () => {
    expect(getNoZeroIntegers(2)).toEqual([1, 1]);
  });

  test('example #2', () => {
    expect(getNoZeroIntegers(11)).toEqual([2, 9]);
  });

  test('example #3', () => {
    expect(getNoZeroIntegers(1000)).toEqual([1, 999]);
  });
});
