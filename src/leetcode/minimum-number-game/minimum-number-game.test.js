import { numberGame } from './minimum-number-game';

describe('[Leetcode] numberGame', () => {
  test('example #1', () => {
    expect(numberGame([5, 4, 2, 3])).toEqual([3, 2, 5, 4]);
  });

  test('example #2', () => {
    expect(numberGame([2, 5])).toBe([5, 2]);
  });
});
