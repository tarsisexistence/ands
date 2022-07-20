import { fairCandySwap } from './fair-candy-swap';

describe('[Leetcode] fairCandySwap', () => {
  test('example #1', () => {
    expect(fairCandySwap([1, 1], [2, 2])).toEqual([1, 2]);
  });

  test('example #2', () => {
    expect(fairCandySwap([1, 2], [2, 3])).toEqual([1, 2]);
  });

  test('example #3', () => {
    expect(fairCandySwap([2], [1, 3])).toEqual([2, 3]);
  });
});
