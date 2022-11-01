import { averageValue } from './average-value-of-even-numbers-that-are-divisible-by-three';

describe('[Leetcode] averageValue', () => {
  test('example #1', () => {
    expect(averageValue([1, 3, 6, 10, 12, 15])).toBe(9);
  });

  test('example #2', () => {
    expect(averageValue([1, 2, 4, 7, 10])).toBe(0);
  });

  test('example #3', () => {
    expect(averageValue([4, 4, 9, 10])).toBe(0);
  });

  test('example #4', () => {
    expect(
      averageValue([
        94, 65, 82, 40, 79, 74, 92, 84, 37, 19, 16, 85, 20, 79, 25, 89, 55, 67, 84, 3, 79, 38, 16, 44, 2, 54, 58, 94,
        69, 71, 14, 24, 13, 21
      ])
    ).toBe(61);
  });
});
