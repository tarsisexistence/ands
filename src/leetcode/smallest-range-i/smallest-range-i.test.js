import { smallestRangeI } from './smallest-range-i';

describe('[Leetcode] smallestRangeI', () => {
  test('example #1', () => {
    expect(smallestRangeI([1], 0)).toBe(0);
  });

  test('example #2', () => {
    expect(smallestRangeI([0, 10], 2)).toBe(6);
  });

  test('example #3', () => {
    expect(smallestRangeI([1, 3, 6], 3)).toBe(0);
  });

  test('example #4', () => {
    expect(smallestRangeI([100, 200, 250, 400, 550, 1000], 50)).toBe(800);
  });
});
