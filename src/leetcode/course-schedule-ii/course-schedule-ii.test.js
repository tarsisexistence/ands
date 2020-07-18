import { findOrder } from './course-schedule-ii';

describe('[Leetcode] findOrder', () => {
  test('example #1', () => {
    expect(findOrder(2, [[1, 0]])).toEqual([0, 1]);
  });

  test('example #2', () => {
    expect(
      findOrder(3, [
        [1, 0],
        [0, 2]
      ])
    ).toEqual([2, 0, 1]);
  });

  test('example #3', () => {
    expect(
      findOrder(3, [
        [1, 0],
        [0, 2],
        [2, 0]
      ])
    ).toEqual([]);
  });

  test('example #4', () => {
    expect(
      findOrder(4, [
        [1, 0],
        [2, 0],
        [3, 1],
        [3, 2]
      ])
    ).toEqual([0, 1, 2, 3]);
  });
});
