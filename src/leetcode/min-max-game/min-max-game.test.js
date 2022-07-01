import { minMaxGame } from './min-max-game';

describe('[Leetcode] minMaxGame', () => {
  test('example #1', () => {
    expect(minMaxGame([1, 3, 5, 2, 4, 8, 2, 2])).toBe(1);
  });

  test('example #2', () => {
    expect(minMaxGame([3])).toBe(3);
  });
});
