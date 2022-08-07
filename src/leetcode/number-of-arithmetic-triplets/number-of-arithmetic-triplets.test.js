import { arithmeticTriplets } from './number-of-arithmetic-triplets';

describe('[Leetcode] arithmeticTriplets', () => {
  test('example #1', () => {
    expect(arithmeticTriplets([0, 1, 4, 6, 7, 10], 3)).toBe(2);
  });

  test('example #2', () => {
    expect(arithmeticTriplets([4, 5, 6, 7, 8, 9], 2)).toBe(2);
  });
});
