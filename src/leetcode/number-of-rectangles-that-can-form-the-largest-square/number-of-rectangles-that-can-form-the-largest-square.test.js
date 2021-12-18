import { countGoodRectangles } from './number-of-rectangles-that-can-form-the-largest-square';

describe('[Leetcode] countGoodRectangles', () => {
  test('example #1', () => {
    expect(
      countGoodRectangles([
        [5, 8],
        [3, 9],
        [5, 12],
        [16, 5]
      ])
    ).toBe(3);
  });

  test('example #2', () => {
    expect(
      countGoodRectangles([
        [2, 3],
        [3, 7],
        [4, 3],
        [3, 7]
      ])
    ).toBe(3);
  });

  test('example #3', () => {
    expect(
      countGoodRectangles([
        [4, 8],
        [3, 7],
        [4, 3],
        [3, 7],
        [4, 5],
        [4, 6],
        [5, 4]
      ])
    ).toBe(4);
  });
});
