import { minimumRecolors } from './minimum-recolors-to-get-k-consecutive-black-blocks';

describe('[Leetcode] minimumRecolors', () => {
  test('example #1', () => {
    expect(minimumRecolors('WBBWWBBWBW', 7)).toBe(3);
  });

  test('example #2', () => {
    expect(minimumRecolors('WBWBBBW', 2)).toBe(0);
  });
});
