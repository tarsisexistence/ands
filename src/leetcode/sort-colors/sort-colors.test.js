import { sortColors } from './sort-colors';

describe('[Leetcode] sortColors', () => {
  test('example #1', () => {
    const colors = [2, 0, 2, 1, 1, 0];
    sortColors(colors);
    expect(colors).toEqual([0, 0, 1, 1, 2, 2]);
  });

  test('example #2', () => {
    const colors = [2, 0, 2, 1, 1, 2];
    sortColors(colors);
    expect(colors).toEqual([0, 1, 1, 2, 2, 2]);
  });
});
