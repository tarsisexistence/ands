import { subsets } from './subsets';

describe('[Leetcode] subsets', () => {
  test('example #1', () => {
    expect(subsets([1, 2, 3])).toEqual([[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]);
  });

  test('example #2', () => {
    expect(subsets([1, 2, 3, 4])).toEqual([
      [],
      [1],
      [2],
      [1, 2],
      [3],
      [1, 3],
      [2, 3],
      [1, 2, 3],
      [4],
      [1, 4],
      [2, 4],
      [1, 2, 4],
      [3, 4],
      [1, 3, 4],
      [2, 3, 4],
      [1, 2, 3, 4]
    ]);
  });

  test('example #3', () => {
    expect(subsets([1, 2])).toEqual([[], [1], [2], [1, 2]]);
  });

  test('example #4', () => {
    expect(subsets([1])).toEqual([[], [1]]);
  });
});
