import { unequalTriplets } from './number-of-unequal-triplets-in-array';

describe('[Leetcode] unequalTriplets', () => {
  test('example #1', () => {
    expect(unequalTriplets([4, 4, 2, 4, 3])).toBe(3);
  });

  test('example #2', () => {
    expect(unequalTriplets([1, 1, 1, 1, 1])).toBe(0);
  });
});
