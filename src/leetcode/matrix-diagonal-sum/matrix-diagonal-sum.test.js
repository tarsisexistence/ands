import { diagonalSum } from './matrix-diagonal-sum';

describe('[Leetcode] diagonalSum', () => {
  test('example #1', () => {
    expect(
      diagonalSum([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ])
    ).toBe(25);
  });

  test('example #2', () => {
    expect(
      diagonalSum([
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1]
      ])
    ).toBe(8);
  });

  test('example #3', () => {
    expect(diagonalSum([[5]])).toBe(5);
  });
});
