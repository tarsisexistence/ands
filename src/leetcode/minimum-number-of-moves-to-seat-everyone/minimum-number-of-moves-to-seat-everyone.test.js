import { minMovesToSeat } from './minimum-number-of-moves-to-seat-everyone';

describe('[Leetcode] minMovesToSeat', () => {
  test('example #1', () => {
    expect(minMovesToSeat([3, 1, 5], [2, 7, 4])).toBe(4);
  });

  test('example #2', () => {
    expect(minMovesToSeat([4, 1, 5, 9], [1, 3, 2, 6])).toBe(7);
  });

  test('example #3', () => {
    expect(minMovesToSeat([2, 2, 6, 6], [1, 3, 2, 6])).toBe(4);
  });
});
