import { isSubtree } from './subtree-of-another-tree';
import { createTree } from '../../other/create-tree/create-tree';

describe('[Leetcode] isSubtree (of another tree)', () => {
  test('example #1', () => {
    expect(isSubtree(createTree([3, 4, 5, 1, 2]), createTree([4, 1, 2]))).toBe(true);
  });

  test('example #2', () => {
    expect(isSubtree(createTree([3, 4, 5, 1, 2, null, null, null, null, 0]), createTree([4, 1, 2]))).toBe(false);
  });

  test('example #3', () => {
    expect(isSubtree(createTree([3, 4, 5, 1, 2, null, null, 2]), createTree([4, 1, 2]))).toBe(false);
  });

  test('example #4', () => {
    expect(isSubtree(createTree([1, 1]), createTree([1]))).toBe(true);
  });
});
