import { matrixReshape } from './reshape-the-matrix';

describe('[Leetcode] matrixReshape', () => {
  test('example #1', () => {
    expect(
      matrixReshape(
        [
          [1, 2],
          [3, 4]
        ],
        1,
        4
      )
    ).toEqual([[1, 2, 3, 4]]);
  });

  test('example #2', () => {
    expect(
      matrixReshape(
        [
          [1, 2],
          [3, 4]
        ],
        2,
        4
      )
    ).toEqual([
      [1, 2],
      [3, 4]
    ]);
  });

  test('example #3', () => {
    expect(
      matrixReshape(
        [
          [1, 2, 3],
          [4, 5, 6]
        ],
        2,
        3
      )
    ).toEqual([
      [1, 2, 3],
      [4, 5, 6]
    ]);
  });

  test('example #4', () => {
    expect(
      matrixReshape(
        [
          [1, 2, 3],
          [4, 5, 6]
        ],
        3,
        2
      )
    ).toEqual([
      [1, 2],
      [3, 4],
      [5, 6]
    ]);
  });
});
