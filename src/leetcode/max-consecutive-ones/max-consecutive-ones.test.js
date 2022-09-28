import { findMaxConsecutiveOnes } from './max-consecutive-ones';

describe('[Leetcode] findMaxConsecutiveOnes', () => {
  test('example #1', () => {
    expect(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])).toBe(3);
  });

  test('example #2', () => {
    expect(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1])).toBe(2);
  });
});
