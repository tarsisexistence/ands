import { createTargetArray } from './create-target-array-in-the-given-order';

describe('[Leetcode] createTargetArray', () => {
  test('example #1', () => {
    expect(createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1])).toEqual([0, 4, 1, 3, 2]);
  });

  test('example #2', () => {
    expect(createTargetArray([1, 2, 3, 4, 0], [0, 1, 2, 3, 0])).toEqual([0, 1, 2, 3, 4]);
  });

  test('example #3', () => {
    expect(createTargetArray([1], [0])).toEqual([1]);
  });
});
