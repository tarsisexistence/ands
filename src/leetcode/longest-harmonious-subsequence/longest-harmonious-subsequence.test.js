import { findLHS } from './longest-harmonious-subsequence';

describe('[Leetcode] findLHS', () => {
  test('example #1', () => {
    expect(findLHS([1, 3, 2, 2, 5, 2, 3, 7])).toBe(5);
  });

  test('example #2', () => {
    expect(findLHS([1, 2, 3, 4])).toBe(2);
  });

  test('example #3', () => {
    expect(findLHS([1, 1, 1, 1])).toBe(0);
  });
});
