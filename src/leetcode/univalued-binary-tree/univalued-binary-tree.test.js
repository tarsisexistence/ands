import { isUnivalTree } from './univalued-binary-tree';
import { createTree } from '../../other/create-tree/create-tree';

describe('[Leetcode] isUnivalTree', () => {
  test('example #1', () => {
    expect(isUnivalTree(createTree([1, 1, 1, 1, 1, null, 1]))).toBeTruthy();
  });

  test('example #2', () => {
    expect(isUnivalTree(createTree([2, 2, 2, 5, 2]))).toBeFalsy();
  });

  test('example #3', () => {
    expect(isUnivalTree(createTree([1]))).toBeTruthy();
  });

  test('example #4', () => {
    expect(isUnivalTree(createTree([1, 1, 1]))).toBeTruthy();
  });

  test('example #4', () => {
    expect(isUnivalTree(createTree([1, 1, 1, null, 2, 1, 1]))).toBeFalsy();
  });
});
