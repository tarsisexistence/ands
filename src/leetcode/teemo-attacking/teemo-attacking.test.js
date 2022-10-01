import { findPoisonedDuration } from './teemo-attacking';

describe('[Leetcode] findPoisonedDuration', () => {
  test('example #1', () => {
    expect(findPoisonedDuration([1, 4], 2)).toBe(4);
  });

  test('example #2', () => {
    expect(findPoisonedDuration([1, 2], 2)).toBe(3);
  });
});
