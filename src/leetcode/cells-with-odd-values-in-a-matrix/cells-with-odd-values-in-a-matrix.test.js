import { oddCells } from './cells-with-odd-values-in-a-matrix';

describe('[Leetcode] oddCells', () => {
  test('example #1', () => {
    expect(
      oddCells(2, 3, [
        [0, 1],
        [1, 1]
      ])
    ).toBe(6);
  });

  test('example #2', () => {
    expect(
      oddCells(2, 2, [
        [1, 1],
        [0, 0]
      ])
    ).toBe(0);
  });
});
