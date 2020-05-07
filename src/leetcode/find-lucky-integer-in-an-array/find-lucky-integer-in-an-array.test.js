import { findLucky } from './find-lucky-integer-in-an-array';

describe('[Leetcode] findLucky', () => {
  test('example #1', () => {
    expect(findLucky([2, 2, 3, 4])).toBe(2);
  });

  test('example #2', () => {
    expect(findLucky([1, 2, 2, 3, 3, 3])).toBe(3);
  });

  test('example #3', () => {
    expect(findLucky([2, 2, 2, 3, 3])).toBe(-1);
  });

  test('example #4', () => {
    expect(findLucky([5])).toBe(-1);
  });

  test('example #5', () => {
    expect(findLucky([7, 7, 7, 7, 7, 7, 7])).toBe(7);
  });

  test('example #6', () => {
    expect(
      findLucky([
        5,
        4,
        7,
        8,
        4,
        8,
        8,
        3,
        7,
        7,
        6,
        3,
        7,
        6,
        5,
        6,
        8,
        4,
        5,
        7,
        4,
        7,
        7,
        5,
        2,
        5,
        6,
        6,
        8,
        1,
        6,
        8,
        8,
        8,
        9,
        3,
        2,
        9
      ])
    ).toBe(8);
  });
});
