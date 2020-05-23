import { intersection } from './intersection-of-two-arrays';

describe('[Leetcode] intersection', () => {
  test('example #1', () => {
    expect(intersection([1, 2, 2, 1], [2, 2])).toEqual([2]);
  });

  test('example #2', () => {
    expect(intersection([4, 9, 5], [9, 4, 9, 8, 4])).toEqual([4, 9]);
  });
});
