import { threeConsecutiveOdds } from './three-consecutive-odds';

describe('[Leetcode] kWeakestRows', () => {
  test('example #1', () => {
    expect(threeConsecutiveOdds([2, 6, 4, 1])).toBe(false);
  });

  test('example #2', () => {
    expect(threeConsecutiveOdds([1, 2, 34, 3, 4, 5, 7, 23, 12])).toBe(true);
  });
});
