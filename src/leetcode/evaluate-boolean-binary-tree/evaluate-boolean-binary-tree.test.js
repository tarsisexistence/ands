import { evaluateTree } from './evaluate-boolean-binary-tree';
import { createTree } from '../../other/create-tree/create-tree';

describe('[Leetcode] evaluateTree', () => {
  test('example #1', () => {
    expect(evaluateTree(createTree([2, 1, 3, null, null, 0, 1]))).toBe(true);
  });

  test('example #2', () => {
    expect(evaluateTree(createTree([0]))).toBe(false);
  });
});
