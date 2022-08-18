import { findSpecialInteger } from './element-appearing-more-than-25-in-sorted-array';

describe('[Leetcode] findSpecialInteger', () => {
  test('example #1', () => {
    expect(findSpecialInteger([1, 2, 2, 6, 6, 6, 6, 7, 10])).toBe(6);
  });

  test('example #2', () => {
    expect(findSpecialInteger([1, 1])).toBe(1);
  });
});
