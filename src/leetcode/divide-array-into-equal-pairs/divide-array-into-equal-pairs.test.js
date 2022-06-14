import { divideArray } from './divide-array-into-equal-pairs';

describe('[Leetcode] divideArray', () => {
  test('example #1', () => {
    expect(divideArray([3, 2, 3, 2, 2, 2])).toBe(true);
  });

  test('example #2', () => {
    expect(divideArray([1, 2, 3, 4])).toBe(false);
  });

  test('example #3', () => {
    expect(
      divideArray([
        12, 8, 19, 5, 4, 8, 14, 18, 20, 12, 1, 14, 9, 15, 14, 5, 11, 4, 7, 2, 2, 11, 18, 5, 13, 20, 16, 7, 1, 6, 13, 13,
        14, 3, 2, 1, 12, 11, 4, 17, 12, 13, 19, 6, 17, 4, 19, 2, 4, 4, 7, 19, 7, 6, 9, 14, 8, 2, 6, 9, 17, 9, 14, 1, 13,
        11, 11, 8, 12, 13, 10, 9, 11, 6, 9, 20, 19, 4, 10, 10, 19, 12, 13, 10, 3, 16, 13, 10, 20, 5, 14, 20, 13, 14, 3,
        7, 15, 7, 10, 1
      ])
    ).toBe(false);
  });
});
