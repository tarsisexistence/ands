import { reconstructQueue } from './queue-reconstruction-by-height';

describe('[Leetcode] reconstructQueue', () => {
  test('example #1', () => {
    expect(
      reconstructQueue([
        [7, 0],
        [4, 4],
        [7, 1],
        [5, 0],
        [6, 1],
        [5, 2]
      ])
    ).toEqual([
      [5, 0],
      [7, 0],
      [5, 2],
      [6, 1],
      [4, 4],
      [7, 1]
    ]);
  });

  test('example #2', () => {
    expect(
      reconstructQueue([
        [9, 0],
        [7, 0],
        [1, 9],
        [3, 0],
        [2, 7],
        [5, 3],
        [6, 0],
        [3, 4],
        [6, 2],
        [5, 2]
      ])
    ).toEqual([
      [3, 0],
      [6, 0],
      [7, 0],
      [5, 2],
      [3, 4],
      [5, 3],
      [6, 2],
      [2, 7],
      [9, 0],
      [1, 9]
    ]);
  });
});
