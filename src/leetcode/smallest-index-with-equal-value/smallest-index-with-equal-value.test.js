import { smallestEqual } from './smallest-index-with-equal-value';

describe('[Leetcode] smallestEqual', () => {
  test('example #1', () => {
    expect(smallestEqual([0, 1, 2])).toBe(0);
  });

  test('example #2', () => {
    expect(smallestEqual([4, 3, 2, 1])).toBe(2);
  });

  test('example #3', () => {
    expect(smallestEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toBe(-1);
  });

  test('example #4', () => {
    expect(smallestEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0])).toBe(10);
  });
});
