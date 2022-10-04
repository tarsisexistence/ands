import { hasPathSum } from './path-sum';
import { createTree } from '../../other/create-tree/create-tree';

describe('[Leetcode] hasPathSum', () => {
  test('example #1', () => {
    expect(hasPathSum(createTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]), 22)).toBe(true);
  });

  test('example #2', () => {
    expect(hasPathSum(createTree([1, 2, 3]), 5)).toBe(false);
  });

  test('example #3', () => {
    expect(hasPathSum(createTree([]), 0)).toBe(false);
  });

  test('example #4', () => {
    expect(hasPathSum(createTree([1, 2]), 1)).toBe(false);
  });
});
