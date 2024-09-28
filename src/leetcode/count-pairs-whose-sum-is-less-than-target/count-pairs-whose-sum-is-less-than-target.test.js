import { countPairs } from './count-pairs-whose-sum-is-less-than-target';

describe('[Leetcode] countPairs', () => {
  test('example #1', () => {
    expect(countPairs([-1, 1, 2, 3, 1], 2)).toBe(3);
  });

  test('example #2', () => {
    expect(countPairs([-6, 2, 5, -2, -7, -1, 3], -2)).toBe(10);
  });
});
