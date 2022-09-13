import { countHillValley } from './count-hills-and-valleys-in-an-array';

describe('[Leetcode] countHillValley', () => {
  test('example #1', () => {
    expect(countHillValley([2, 4, 1, 1, 6, 5])).toBe(3);
  });

  test('example #2', () => {
    expect(countHillValley([6, 6, 5, 5, 4, 1])).toBe(0);
  });

  test('example #3', () => {
    expect(countHillValley([5, 7, 7, 1, 7])).toBe(2);
  });
});
