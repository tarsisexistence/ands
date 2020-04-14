import { luckyNumbers } from './lucky-numbers-in-a-matrix';

describe('[Leetcode] luckyNumbers', () => {
  test('example #1', () => {
    expect(
      luckyNumbers([
        [3, 7, 8],
        [9, 11, 13],
        [15, 16, 17]
      ])
    ).toEqual([15]);
  });

  test('example #2', () => {
    expect(
      luckyNumbers([
        [1, 10, 4, 2],
        [9, 3, 8, 7],
        [15, 16, 17, 12]
      ])
    ).toEqual([12]);
  });

  test('example #3', () => {
    expect(
      luckyNumbers([
        [7, 8],
        [1, 2]
      ])
    ).toEqual([7]);
  });
});
