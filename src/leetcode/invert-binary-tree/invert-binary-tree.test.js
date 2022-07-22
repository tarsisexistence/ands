import { invertTree } from './invert-binary-tree';
import { createTree } from '../../other/create-tree/create-tree';

describe('[Leetcode] invertTree', () => {
  test('example #1', () => {
    expect(invertTree(createTree([4, 2, 7, 1, 3, 6, 9]))).toEqual(createTree([4, 7, 2, 9, 6, 3, 1]));
  });

  test('example #2', () => {
    expect(invertTree(createTree([2, 1, 3]))).toEqual(createTree([2, 3, 1]));
  });

  test('example #3', () => {
    expect(invertTree(createTree([]))).toEqual(createTree([]));
  });
});
