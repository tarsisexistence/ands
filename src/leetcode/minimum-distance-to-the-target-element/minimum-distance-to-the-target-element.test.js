import { getMinDistance } from './minimum-distance-to-the-target-element';

describe('[Leetcode] minDepth', () => {
  test('example #1', () => {
    expect(getMinDistance([1, 2, 3, 4, 5], 5, 3)).toBe(1);
  });

  test('example #2', () => {
    expect(getMinDistance([1], 1, 0)).toBe(0);
  });

  test('example #3', () => {
    expect(getMinDistance([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1, 0)).toBe(0);
  });
});
