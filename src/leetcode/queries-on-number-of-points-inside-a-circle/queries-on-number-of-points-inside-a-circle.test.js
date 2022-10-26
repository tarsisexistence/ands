import { countPoints } from './queries-on-number-of-points-inside-a-circle';

describe('[Leetcode] countPoints', () => {
  test('example #1', () => {
    expect(
      countPoints(
        [
          [1, 3],
          [3, 3],
          [5, 3],
          [2, 2]
        ],
        [
          [2, 3, 1],
          [4, 3, 1],
          [1, 1, 2]
        ]
      )
    ).toEqual([3, 2, 2]);
  });

  test('example #2', () => {
    expect(
      countPoints(
        [
          [1, 1],
          [2, 2],
          [3, 3],
          [4, 4],
          [5, 5]
        ],
        [
          [1, 2, 2],
          [2, 2, 2],
          [4, 3, 2],
          [4, 3, 3]
        ]
      )
    ).toEqual([2, 3, 2, 4]);
  });
});
