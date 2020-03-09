import { sortByBits } from './sort-integers-by-the-number-of-1-bits';

describe('[Leetcode] sortByBits', () => {
  test('example #1', () => {
    const unsorted = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    const sorted = [0, 1, 2, 4, 8, 3, 5, 6, 7];
    expect(sortByBits(unsorted)).toEqual(sorted);
  });

  test('example #2', () => {
    const unsorted = [1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1];
    const sorted = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024];
    expect(sortByBits(unsorted)).toEqual(sorted);
  });

  test('example #3', () => {
    const unsorted = [10000, 10000];
    const sorted = [10000, 10000];
    expect(sortByBits(unsorted)).toEqual(sorted);
  });

  test('example #4', () => {
    const unsorted = [2, 3, 5, 7, 11, 13, 17, 19];
    const sorted = [2, 3, 5, 17, 7, 11, 13, 19];
    expect(sortByBits(unsorted)).toEqual(sorted);
  });

  test('example #5', () => {
    const unsorted = [10, 100, 1000, 10000];
    const sorted = [10, 100, 10000, 1000];
    expect(sortByBits(unsorted)).toEqual(sorted);
  });
});
