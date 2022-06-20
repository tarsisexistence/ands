import { findMiddleIndex } from './find-the-middle-index-in-array';

describe('[Leetcode] findMiddleIndex', () => {
  test('example #1', () => {
    expect(findMiddleIndex([2, 3, -1, 8, 4])).toBe(3);
  });

  test('example #2', () => {
    expect(findMiddleIndex([1, -1, 4])).toBe(2);
  });

  test('example #3', () => {
    expect(findMiddleIndex([2, 5])).toBe(-1);
  });
});
