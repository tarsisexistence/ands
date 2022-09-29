import { longestOnes } from './max-consecutive-ones-iii';

describe('[Leetcode] longestOnes', () => {
  test('example #1', () => {
    expect(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2)).toBe(6);
  });

  test('example #2', () => {
    expect(longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3)).toBe(10);
  });

  test('example #3', () => {
    expect(longestOnes([0, 0, 1, 1, 1, 0, 0], 0)).toBe(3);
  });

  test('example #4', () => {
    expect(longestOnes([1, 1, 0, 1, 0, 1, 0, 0], 0)).toBe(2);
  });
});
