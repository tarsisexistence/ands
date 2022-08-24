import { findTarget } from './two-sum-iv-input-is-a-bst';
import { createTree } from '../../other/create-tree/create-tree';

describe('[Leetcode] findTarget', () => {
  test('example #1', () => {
    expect(findTarget(createTree([5, 3, 6, 2, 4, null, 7]), 9)).toBe(true);
  });

  test('example #2', () => {
    expect(findTarget(createTree([5, 3, 6, 2, 4, null, 7]), 28)).toBe(false);
  });
});
