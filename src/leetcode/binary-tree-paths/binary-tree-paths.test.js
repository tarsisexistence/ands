import { createTree } from '../../other/create-tree/create-tree';
import { binaryTreePaths } from './binary-tree-paths';

describe('[Leetcode] binaryTreePaths', () => {
  test('example #1', () => {
    expect(binaryTreePaths(createTree([1, 2, 3, null, 5]))).toEqual(['1->2->5', '1->3']);
  });

  test('example #2', () => {
    expect(binaryTreePaths(createTree([1]))).toEqual(['1']);
  });

  test('example #3', () => {
    expect(
      binaryTreePaths(
        createTree([
          37,
          -34,
          -48,
          null,
          -100,
          -100,
          48,
          null,
          null,
          null,
          null,
          -54,
          null,
          -71,
          -22,
          null,
          null,
          null,
          8
        ])
      )
    ).toEqual(['37->-34->-100', '37->-48->-100', '37->-48->48->-54->-71', '37->-48->48->-54->-22->8']);
  });
});
