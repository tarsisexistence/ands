import { createTree } from '../../other/create-tree/create-tree';
import { preorderTraversal } from './binary-tree-preorder-traversal';

describe('[Leetcode] postorderTraversal', () => {
  test('example #1', () => {
    expect(preorderTraversal(createTree([1, null, 2, 3]))).toEqual([1, 2, 3]);
  });

  test('example #2', () => {
    expect(preorderTraversal(createTree([]))).toEqual([]);
  });

  test('example #3', () => {
    expect(preorderTraversal(createTree([1]))).toEqual([1]);
  });
});
