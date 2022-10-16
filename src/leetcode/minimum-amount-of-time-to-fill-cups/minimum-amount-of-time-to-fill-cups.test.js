import { fillCups } from '../minimum-absolute-difference-in-bst/minimum-absolute-difference-in-bst';

describe('[Leetcode] fillCups', () => {
  test('example #1', () => {
    expect(fillCups([1, 4, 2])).toBe(4);
  });

  test('example #2', () => {
    expect(fillCups([5, 4, 4])).toBe(7);
  });

  test('example #3', () => {
    expect(fillCups([5, 0, 0])).toBe(5);
  });
});
