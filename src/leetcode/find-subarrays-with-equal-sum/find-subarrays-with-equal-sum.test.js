import { findSubarrays } from './find-subarrays-with-equal-sum';

describe('[Leetcode] findSubarrays', () => {
  test('example #1', () => {
    expect(findSubarrays([4, 2, 4])).toBe(true);
  });

  test('example #2', () => {
    expect(findSubarrays([1, 2, 3, 4, 5])).toBe(false);
  });

  test('example #3', () => {
    expect(findSubarrays([0, 0, 0])).toBe(true);
  });

  test('example #4', () => {
    expect(
      findSubarrays([
        77, 95, 90, 98, 8, 100, 88, 96, 6, 40, 86, 56, 98, 96, 40, 52, 30, 33, 97, 72, 54, 15, 33, 77, 78, 8, 21, 47,
        99, 48
      ])
    ).toBe(true);
  });
});
