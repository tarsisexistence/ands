import { subsetXORSum } from './sum-of-all-subset-xor-totals';

describe('[Leetcode] subsetXORSum', () => {
  test('example #1', () => {
    expect(subsetXORSum([1, 3])).toBe(6);
  });

  test('example #2', () => {
    expect(subsetXORSum([5, 1, 6])).toBe(28);
  });

  test('example #3', () => {
    expect(subsetXORSum([3, 4, 5, 6, 7, 8])).toBe(480);
  });
});
