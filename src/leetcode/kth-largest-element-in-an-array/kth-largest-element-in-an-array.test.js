import { findKthLargest } from './kth-largest-element-in-an-array';

describe('[Leetcode] findKthLargest', () => {
  test('example #1', () => {
    expect(findKthLargest([3, 2, 1, 5, 6, 4], 2)).toBe(5);
  });

  test('example #2', () => {
    expect(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)).toBe(4);
  });
});
