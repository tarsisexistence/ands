import { minSubsequence } from './minimum-subsequence-in-non-increasing-order';

describe('[Leetcode] minSubsequence', () => {
  test('example #1', () => {
    expect(minSubsequence([4, 3, 10, 9, 8])).toEqual([10, 9]);
  });

  test('example #2', () => {
    expect(minSubsequence([4, 4, 7, 6, 7])).toEqual([7, 7, 6]);
  });

  test('example #3', () => {
    expect(minSubsequence([6])).toEqual([6]);
  });
});
