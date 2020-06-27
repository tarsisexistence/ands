import { shiftGrid } from './shift-2d-grid';

describe('[Leetcode] numSquares', () => {
  test('example #1', () => {
    expect(
      shiftGrid(
        [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9]
        ],
        1
      )
    ).toEqual([
      [9, 1, 2],
      [3, 4, 5],
      [6, 7, 8]
    ]);
  });

  test('example #2', () => {
    expect(
      shiftGrid(
        [
          [3, 8, 1, 9],
          [19, 7, 2, 5],
          [4, 6, 11, 10],
          [12, 0, 21, 13]
        ],
        4
      )
    ).toEqual([
      [12, 0, 21, 13],
      [3, 8, 1, 9],
      [19, 7, 2, 5],
      [4, 6, 11, 10]
    ]);
  });

  test('example #3', () => {
    expect(
      shiftGrid(
        [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9]
        ],
        9
      )
    ).toEqual([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ]);
  });
});
