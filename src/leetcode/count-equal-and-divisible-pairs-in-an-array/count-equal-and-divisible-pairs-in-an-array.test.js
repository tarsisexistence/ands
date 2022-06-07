import { countPairs } from './count-equal-and-divisible-pairs-in-an-array';

describe('[Leetcode] countPairs', () => {
  test('example #1', () => {
    expect(countPairs([3, 1, 2, 2, 2, 1, 3], 2)).toBe(4);
  });

  test('example #2', () => {
    expect(countPairs([1, 2, 3, 4], 1)).toBe(0);
  });

  test('example #3', () => {
    expect(countPairs([6, 7, 6, 7, 1, 6, 9], 1)).toBe(4);
  });
});
