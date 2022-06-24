import { createTree } from '../../other/create-tree/create-tree';
import { postorderTraversal } from './binary-tree-postorder-traversal';

describe('[Leetcode] postorderTraversal', () => {
  test('example #1', () => {
    expect(postorderTraversal(createTree([1, null, 2, 3]))).toEqual([3, 2, 1]);
  });

  test('example #2', () => {
    expect(postorderTraversal(createTree([]))).toEqual([]);
  });

  test('example #3', () => {
    expect(postorderTraversal(createTree([1]))).toEqual([1]);
  });
});
