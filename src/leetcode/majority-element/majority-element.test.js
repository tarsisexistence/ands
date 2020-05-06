import { majorityElement } from './majority-element';

describe('[Leetcode] majorityElement', () => {
  test('example #1', () => {
    expect(majorityElement([3, 2, 3])).toBe(3);
  });

  test('example #2', () => {
    expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toBe(2);
  });

  test('example #3', () => {
    expect(majorityElement([1])).toBe(1);
  });
});
