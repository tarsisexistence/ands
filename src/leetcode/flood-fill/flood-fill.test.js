import { floodFill } from './flood-fill';

describe('[Leetcode] floodFill', () => {
  test('example #1', () => {
    expect(
      floodFill(
        [
          [1, 1, 1],
          [1, 1, 0],
          [1, 0, 1]
        ],
        1,
        1,
        2
      )
    ).toEqual([
      [2, 2, 2],
      [2, 2, 0],
      [2, 0, 1]
    ]);
  });

  test('example #2', () => {
    expect(
      floodFill(
        [
          [1, 1, 2],
          [2, 2, 0],
          [2, 0, 2]
        ],
        1,
        1,
        3
      )
    ).toEqual([
      [1, 1, 2],
      [3, 3, 0],
      [3, 0, 2]
    ]);
  });
});
