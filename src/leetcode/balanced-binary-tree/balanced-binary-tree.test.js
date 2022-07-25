import { isBalanced } from './balanced-binary-tree';
import { createTree } from '../../other/create-tree/create-tree';

describe('[Leetcode] isBalanced', () => {
  test('example #1', () => {
    expect(isBalanced(createTree([3, 9, 20, null, null, 15, 7]))).toBe(true);
  });

  test('example #2', () => {
    expect(isBalanced(createTree([1, 2, 2, 3, 3, null, null, 4, 4]))).toBe(false);
  });

  test('example #3', () => {
    expect(isBalanced(createTree([]))).toBe(true);
  });
});
