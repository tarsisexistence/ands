import { nearestValidPoint } from './find-nearest-point-that-has-the-same-x-or-y-coordinate';

describe('[Leetcode] nearestValidPoint', () => {
  test('example #1', () => {
    expect(
      nearestValidPoint(3, 4, [
        [1, 2],
        [3, 1],
        [2, 4],
        [2, 3],
        [4, 4]
      ])
    ).toBe(2);
  });

  test('example #2', () => {
    expect(nearestValidPoint(3, 4, [[3, 4]])).toBe(0);
  });

  test('example #3', () => {
    expect(nearestValidPoint(3, 4, [[2, 3]])).toBe(-1);
  });
});
