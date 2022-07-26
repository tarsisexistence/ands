import { climbStairs } from './climbing-stairs';

describe('[Leetcode] climbStairs', () => {
  test('example #1', () => {
    expect(climbStairs(2)).toBe(2);
  });

  test('example #2', () => {
    expect(climbStairs(3)).toBe(3);
  });

  test('example #3', () => {
    expect(climbStairs(1)).toBe(1);
  });

  test('example #4', () => {
    expect(climbStairs(4)).toBe(5);
  });

  test('example #5', () => {
    expect(climbStairs(5)).toBe(8);
  });
});
