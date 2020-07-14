import { isSameTree } from './same-tree';
import { createTree } from '../../other/createTree/createTree';

describe('[Leetcode] isSameTree', () => {
  test('example #1', () => {
    expect(isSameTree(createTree([1, 2, 3]), createTree([1, 2, 3]))).toBeTruthy();
  });

  test('example #2', () => {
    expect(isSameTree(createTree([1, 3, 2]), createTree([1, 2, 3]))).toBeFalsy();
  });

  test('example #3', () => {
    expect(isSameTree(createTree([1, null, 3]), createTree([1, null, 3]))).toBeTruthy();
  });

  test('example #4', () => {
    expect(isSameTree(createTree([1, null, 2]), createTree([1, 2]))).toBeFalsy();
  });

  test('example #5', () => {
    expect(isSameTree(createTree([1, null, 2]), createTree([1]))).toBeFalsy();
  });

  test('example #6', () => {
    expect(isSameTree(createTree([1, null]), createTree([]))).toBeFalsy();
  });

  test('example #7', () => {
    expect(isSameTree(createTree([]), createTree([]))).toBeTruthy();
  });

  test('example #8', () => {
    expect(isSameTree(createTree([null]), createTree([]))).toBeTruthy();
  });
});
