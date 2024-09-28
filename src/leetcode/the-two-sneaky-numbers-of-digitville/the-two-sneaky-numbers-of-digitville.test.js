import { getSneakyNumbers } from './the-two-sneaky-numbers-of-digitville';

describe('[Leetcode] getSneakyNumbers', () => {
  test('example #1', () => {
    expect(getSneakyNumbers([0, 1, 1, 0])).toEqual([1, 0]);
  });

  test('example #2', () => {
    expect(getSneakyNumbers([0, 3, 2, 1, 3, 2])).toEqual([3, 2]);
  });

  test('example #3', () => {
    expect(getSneakyNumbers([7, 1, 5, 4, 3, 4, 6, 0, 9, 5, 8, 2])).toEqual([4, 5]);
  });
});
