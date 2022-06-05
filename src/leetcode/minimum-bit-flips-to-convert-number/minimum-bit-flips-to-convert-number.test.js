import { minimumAbsDifference } from './minimum-absolute-difference';

describe('[Leetcode] minimumAbsDifference', () => {
  test('example #1', () => {
    expect(minimumAbsDifference([4, 2, 1, 3])).toEqual([
      [1, 2],
      [2, 3],
      [3, 4]
    ]);
  });

  test('example #2', () => {
    expect(minimumAbsDifference([1, 3, 6, 10, 15])).toEqual([[1, 3]]);
  });

  test('example #3', () => {
    expect(minimumAbsDifference([3, 8, -10, 23, 19, -4, -14, 27])).toEqual([
      [-14, -10],
      [19, 23],
      [23, 27]
    ]);
  });
});
