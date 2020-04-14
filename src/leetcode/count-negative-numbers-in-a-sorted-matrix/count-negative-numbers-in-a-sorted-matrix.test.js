import { countNegatives } from './count-negative-numbers-in-a-sorted-matrix';

describe('[Leetcode] countNegatives', () => {
  test('example #1', () => {
    expect(
      countNegatives([
        [4, 3, 2, -1],
        [3, 2, 1, -1],
        [1, 1, -1, -2],
        [-1, -1, -2, -3]
      ])
    ).toBe(8);
  });

  test('example #2', () => {
    expect(
      countNegatives([
        [3, 2],
        [1, 0]
      ])
    ).toBe(0);
  });

  test('example #3', () => {
    expect(
      countNegatives([
        [1, -1],
        [-1, -1]
      ])
    ).toBe(3);
  });

  test('example #4', () => {
    expect(countNegatives([[-1]])).toBe(1);
  });
});
