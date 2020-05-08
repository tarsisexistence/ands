import { checkStraightLine } from './check-if-it-is-a-straight-line';

describe('[Leetcode] checkStraightLine 2', () => {
  test('example #1', () => {
    expect(
      checkStraightLine([
        [1, 2],
        [2, 3],
        [3, 4],
        [4, 5],
        [5, 6],
        [6, 7]
      ])
    ).toBeTruthy();
  });

  test('example #2', () => {
    expect(
      checkStraightLine([
        [-3, -2],
        [-1, -2],
        [2, -2],
        [-2, -2],
        [0, -2]
      ])
    ).toBeTruthy();
  });

  test('example #3', () => {
    expect(
      checkStraightLine([
        [1, 1],
        [2, 2],
        [3, 4],
        [4, 5],
        [5, 6],
        [7, 7]
      ])
    ).toBeFalsy();
  });

  test('example #4', () => {
    expect(
      checkStraightLine([
        [0, 1],
        [1, 3],
        [-4, -7],
        [5, 11]
      ])
    ).toBeTruthy();
  });
});
