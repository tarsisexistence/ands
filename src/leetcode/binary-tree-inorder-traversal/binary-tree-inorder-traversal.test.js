import { createTree } from '../../other/create-tree/create-tree';
import { inorderTraversal } from './binary-tree-inorder-traversal';

describe('[Leetcode] inorderTraversal', () => {
  test('example #1', () => {
    expect(inorderTraversal(createTree([1, null, 2, 3]))).toEqual([1, 3, 2]);
  });

  test('example #2', () => {
    expect(inorderTraversal(createTree([]))).toEqual([]);
  });

  test('example #3', () => {
    expect(inorderTraversal(createTree([1]))).toEqual([1]);
  });

  test('example #4', () => {
    expect(inorderTraversal(createTree([1, 3, 8, 2, 4]))).toEqual([2, 3, 4, 1, 8]);
  });
});
