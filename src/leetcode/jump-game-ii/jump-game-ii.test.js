import { jump } from './jump-game-ii';

describe('[Leetcode] jump', () => {
  test('example #1', () => {
    expect(jump([2, 3, 1, 1, 4])).toBe(2);
  });

  test('example #2', () => {
    expect(jump([3, 2, 1, 1, 4])).toBe(2);
  });

  test('example #3', () => {
    expect(jump([1, 2, 1, 1, 4])).toBe(3);
  });

  test('example #4', () => {
    expect(jump([4, 2, 1, 1, 4])).toBe(1);
  });

  test('example #5', () => {
    expect(jump([1, 1, 1, 1, 1, 1, 1, 1, 100])).toBe(8);
  });

  test('example #6', () => {
    expect(jump([0])).toBe(0);
  });

  test('example #7', () => {
    expect(jump([100])).toBe(0);
  });

  test('example #8', () => {
    expect(jump([3, 5, 5, 1, 0, 1, 5])).toBe(2);
  });

  test('example #9', () => {
    expect(
      jump([
        5,
        6,
        4,
        4,
        6,
        9,
        4,
        4,
        7,
        4,
        4,
        8,
        2,
        6,
        8,
        1,
        5,
        9,
        6,
        5,
        2,
        7,
        9,
        7,
        9,
        6,
        9,
        4,
        1,
        6,
        8,
        8,
        4,
        4,
        2,
        0,
        3,
        8,
        5
      ])
    ).toBe(5);
  });
});
