import { createTree } from '../../other/create-tree/create-tree';
import { findTilt } from './binary-tree-tilt';

describe('[Leetcode] findTilt', () => {
  test('example #1', () => {
    expect(findTilt(createTree([1, 2, 3]))).toBe(1);
  });

  test('example #2', () => {
    expect(findTilt(createTree([4, 2, 9, 3, 5, null, 7]))).toBe(15);
  });

  test('example #3', () => {
    expect(findTilt(createTree([21, 7, 14, 1, 1, 2, 2, 3, 3]))).toBe(9);
  });
});
