import { construct2DArray } from './convert-1d-array-into-2d-array';

describe('[Leetcode] construct2DArray', () => {
  test('example #1', () => {
    expect(construct2DArray([1, 2, 3, 4], 2, 2)).toEqual([
      [1, 2],
      [3, 4]
    ]);
  });

  test('example #2', () => {
    expect(construct2DArray([1, 2, 3], 1, 3)).toEqual([[1, 2, 3]]);
  });

  test('example #3', () => {
    expect(construct2DArray([1, 2], 1, 1)).toEqual([]);
  });
});
