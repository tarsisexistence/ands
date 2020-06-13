import { canBeEqual } from './make-two-arrays-equal-by-reversing-sub-arrays';

describe('[Leetcode] canBeEqual', () => {
  test('example #1', () => {
    expect(canBeEqual([1, 2, 3, 4], [2, 4, 1, 3])).toBeTruthy();
  });

  test('example #2', () => {
    expect(canBeEqual([7], [7])).toBeTruthy();
  });

  test('example #3', () => {
    expect(canBeEqual([1, 12], [12, 1])).toBeTruthy();
  });

  test('example #4', () => {
    expect(canBeEqual([1, 1, 1, 1], [1, 1, 1, 1])).toBeTruthy();
  });

  test('example #5', () => {
    expect(canBeEqual([3, 7, 9], [3, 7, 11])).toBeFalsy();
  });
});
