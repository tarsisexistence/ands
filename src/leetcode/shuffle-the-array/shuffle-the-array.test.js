import { shuffle } from './shuffle-the-array';

describe('[Leetcode] shuffle', () => {
  test('example #1', () => {
    expect(shuffle([2, 5, 1, 3, 4, 7], 3)).toEqual([2, 3, 5, 4, 1, 7]);
  });

  test('example #2', () => {
    expect(shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4)).toEqual([1, 4, 2, 3, 3, 2, 4, 1]);
  });

  test('example #3', () => {
    expect(shuffle([1, 1, 2, 2], 2)).toEqual([1, 2, 1, 2]);
  });
});
