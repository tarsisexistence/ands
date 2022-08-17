import { largestPerimeter } from './largest-perimeter-triangle';

describe('[Leetcode] largestPerimeter', () => {
  test('example #1', () => {
    expect(largestPerimeter([2, 1, 2])).toBe(5);
  });

  test('example #2', () => {
    expect(largestPerimeter([1, 2, 1])).toBe(0);
  });
});
