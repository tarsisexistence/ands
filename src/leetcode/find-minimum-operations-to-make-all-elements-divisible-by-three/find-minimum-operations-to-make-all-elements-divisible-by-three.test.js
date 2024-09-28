import { minimumOperations } from './find-minimum-operations-to-make-all-elements-divisible-by-three';

describe('[Leetcode] findLucky', () => {
  test('example #1', () => {
    expect(minimumOperations([1, 2, 3, 4])).toBe(3);
  });

  test('example #2', () => {
    expect(minimumOperations([3, 6, 9])).toBe(0);
  });
});
