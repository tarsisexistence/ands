import { sortEvenOdd } from './sort-even-and-odd-indices-independently';

describe('[Leetcode] sortEvenOdd', () => {
  test('example #1', () => {
    expect(sortEvenOdd([4, 1, 2, 3])).toEqual([2, 3, 4, 1]);
  });

  test('example #2', () => {
    expect(sortEvenOdd([2, 1])).toEqual([2, 1]);
  });

  test('example #3', () => {
    expect(sortEvenOdd([36, 45, 32, 31, 15, 41, 9, 46, 36, 6, 15, 16, 33, 26, 27, 31, 44, 34])).toEqual([
      9, 46, 15, 45, 15, 41, 27, 34, 32, 31, 33, 31, 36, 26, 36, 16, 44, 6
    ]);
  });
});
