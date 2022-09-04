import { arrayRankTransform } from './rank-transform-of-an-array';

describe('[Leetcode] arrayRankTransform', () => {
  test('example #1', () => {
    expect(arrayRankTransform([40, 10, 20, 30])).toEqual([4, 1, 2, 3]);
  });

  test('example #2', () => {
    expect(arrayRankTransform([100, 100, 100])).toEqual([1, 1, 1]);
  });

  test('example #3', () => {
    expect(arrayRankTransform([37, 12, 28, 9, 100, 56, 80, 5, 12])).toEqual([5, 3, 4, 2, 8, 6, 7, 1, 3]);
  });
});
