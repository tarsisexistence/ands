import { sumIndicesWithKSetBits } from './sum-of-values-at-indices-with-k-set-bits';

describe('[Leetcode] sumIndicesWithKSetBits', () => {
  test('example #1', () => {
    expect(sumIndicesWithKSetBits([5, 10, 1, 5, 2], 1)).toBe(13);
  });

  test('example #2', () => {
    expect(sumIndicesWithKSetBits([4, 3, 2, 1], 2)).toBe(1);
  });
});
