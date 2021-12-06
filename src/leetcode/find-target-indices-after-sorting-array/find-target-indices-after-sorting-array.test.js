import { targetIndices } from './find-target-indices-after-sorting-array';

describe('[Leetcode] targetIndices', () => {
  test('example #1', () => {
    expect(targetIndices([1, 2, 5, 2, 3], 2)).toEqual([1, 2]);
  });

  test('example #2', () => {
    expect(targetIndices([1, 2, 5, 2, 3], 3)).toEqual([3]);
  });

  test('example #3', () => {
    expect(targetIndices([1, 2, 5, 2, 3], 5)).toEqual([4]);
  });

  test('example #4', () => {
    expect(targetIndices([1, 2, 5, 2, 3], 4)).toEqual([]);
  });

  test('example #5', () => {
    expect(
      targetIndices([48, 90, 9, 21, 31, 35, 19, 69, 29, 52, 100, 54, 21, 86, 6, 45, 42, 5, 62, 77, 15, 38], 6)
    ).toEqual([1]);
  });
});
