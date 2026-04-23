import { mirrorDistance } from './mirror-distance-of-an-integer';

describe('[Leetcode] mirrorDistance', () => {
  test('returns 0 for palindromic number', () => {
    expect(mirrorDistance(121)).toBe(0);
  });

  test('computes absolute difference with reversed digits', () => {
    expect(mirrorDistance(123)).toBe(198);
  });

  test('handles trailing zeros in reversed representation', () => {
    expect(mirrorDistance(120)).toBe(99);
  });
});
