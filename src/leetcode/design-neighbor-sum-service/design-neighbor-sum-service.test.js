import { NeighborSum } from './design-neighbor-sum-service';

describe('[Leetcode] NeighborSum', () => {
  test('example #1', () => {
    const grid = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8]
    ];
    const neighborSum = new NeighborSum(grid);

    expect(neighborSum.adjacentSum(1)).toBe(6);
    expect(neighborSum.adjacentSum(4)).toBe(16);
    expect(neighborSum.diagonalSum(4)).toBe(16);
    expect(neighborSum.diagonalSum(8)).toBe(4);
  });

  test('example #2', () => {
    const grid = [
      [1, 2, 0, 3],
      [4, 7, 15, 6],
      [8, 9, 10, 11],
      [12, 13, 14, 5]
    ];
    const neighborSum = new NeighborSum(grid);

    expect(neighborSum.adjacentSum(15)).toBe(23);
    expect(neighborSum.diagonalSum(9)).toBe(45);
  });
});
