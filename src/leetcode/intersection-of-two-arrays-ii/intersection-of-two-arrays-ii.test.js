import { intersect } from './intersection-of-two-arrays-ii';

describe('[Leetcode] intersect', () => {
  test('example #1', () => {
    expect(intersect([1, 2, 2, 1], [2, 2])).toEqual([2, 2]);
  });

  test('example #2', () => {
    expect(intersect([4, 9, 5], [9, 4, 9, 8, 4])).toEqual([4, 9]);
  });
});
