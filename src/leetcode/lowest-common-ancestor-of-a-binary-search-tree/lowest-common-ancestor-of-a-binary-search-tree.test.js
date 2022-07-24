import { lowestCommonAncestor } from './lowest-common-ancestor-of-a-binary-search-tree';
import { createTree } from '../../other/create-tree/create-tree';

describe('[Leetcode] lowestCommonAncestor', () => {
  test('example #1', () => {
    expect(
      lowestCommonAncestor(createTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]), createTree([2]), createTree([8])).val
    ).toBe(6);
  });

  test('example #2', () => {
    expect(
      lowestCommonAncestor(createTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]), createTree([2]), createTree([4])).val
    ).toBe(2);
  });

  test('example #3', () => {
    expect(lowestCommonAncestor(createTree([2, 1]), createTree([2]), createTree([1])).val).toBe(2);
  });

  test('example #4', () => {
    expect(
      lowestCommonAncestor(createTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]), createTree([3]), createTree([4])).val
    ).toBe(4);
  });

  test('example #5', () => {
    expect(lowestCommonAncestor(createTree([2, 1, 3]), createTree([3]), createTree([1])).val).toBe(2);
  });

  test('example #6', () => {
    expect(lowestCommonAncestor(createTree([3, 1, 4, null, 2]), createTree([2]), createTree([4])).val).toBe(3);
  });
});
