import { findEvenNumbers } from './finding-3-digit-even-numbers';

describe('[Leetcode] findEvenNumbers', () => {
  test('example #1', () => {
    expect(findEvenNumbers([2, 1, 3, 0])).toEqual([102, 120, 130, 132, 210, 230, 302, 310, 312, 320]);
  });

  test('example #2', () => {
    expect(findEvenNumbers([2, 2, 8, 8, 2])).toEqual([222, 228, 282, 288, 822, 828, 882]);
  });

  test('example #3', () => {
    expect(findEvenNumbers([3, 7, 5])).toEqual([]);
  });
});
