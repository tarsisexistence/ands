import { applyOperations } from './apply-operations-to-an-array';

describe('[Leetcode] applyOperations', () => {
  test('example #1', () => {
    expect(applyOperations([1, 2, 2, 1, 1, 0])).toEqual([1, 4, 2, 0, 0, 0]);
  });

  test('example #2', () => {
    expect(applyOperations([0, 1])).toEqual([1, 0]);
  });
});
