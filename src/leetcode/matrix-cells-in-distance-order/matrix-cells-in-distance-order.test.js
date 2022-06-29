import { allCellsDistOrder } from './matrix-cells-in-distance-order';

describe('[Leetcode] allCellsDistOrder', () => {
  test('example #1', () => {
    expect(allCellsDistOrder(1, 2, 0, 0)).toEqual([
      [0, 0],
      [0, 1]
    ]);
  });

  test('example #2', () => {
    expect(allCellsDistOrder(2, 2, 0, 1)).toEqual([
      [0, 1],
      [0, 0],
      [1, 1],
      [1, 0]
    ]);
  });

  test('example #3', () => {
    expect(allCellsDistOrder(2, 3, 1, 2)).toEqual([
      [1, 2],
      [0, 2],
      [1, 1],
      [0, 1],
      [1, 0],
      [0, 0]
    ]);
  });
});
