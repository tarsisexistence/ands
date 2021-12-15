import { countGoodTriplets } from './count-good-triplets';

describe('[Leetcode] countGoodTriplets', () => {
  test('example #1', () => {
    expect(countGoodTriplets([3, 0, 1, 1, 9, 7], 7, 2, 3)).toBe(4);
  });

  test('example #2', () => {
    expect(countGoodTriplets([1, 1, 2, 2, 3], 0, 0, 1)).toBe(0);
  });
});
