import { findGCD } from './find-greatest-common-divisor-of-array';

describe('[Leetcode] findGCD', () => {
  test('example #1', () => {
    expect(findGCD([2, 5, 6, 9, 10])).toBe(2);
  });

  test('example #2', () => {
    expect(findGCD([7, 5, 6, 8, 3])).toBe(1);
  });

  test('example #3', () => {
    expect(findGCD([3, 3])).toBe(3);
  });
});
