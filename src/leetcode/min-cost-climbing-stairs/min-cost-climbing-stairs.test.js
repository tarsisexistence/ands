import { minCostClimbingStairs } from './min-cost-climbing-stairs';

describe('[Leetcode] minCostClimbingStairs', () => {
  test('example #1', () => {
    expect(minCostClimbingStairs([10, 15, 20])).toBe(15);
  });

  test('example #2', () => {
    expect(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])).toBe(6);
  });

  test('example #3', () => {
    expect(minCostClimbingStairs([0, 1, 2, 2])).toBe(2);
  });

  test('example #4', () => {
    expect(minCostClimbingStairs([1, 0, 0, 2])).toBe(0);
  });
});
