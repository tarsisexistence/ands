import { nextGreaterElement } from './next-greater-element-i';

describe('[Leetcode] nextGreaterElement', () => {
  test('example #1', () => {
    expect(nextGreaterElement([4, 1, 2], [1, 3, 4, 2])).toEqual([-1, 3, -1]);
  });

  test('example #2', () => {
    expect(nextGreaterElement([2, 4], [1, 2, 3, 4])).toEqual([3, -1]);
  });
});
