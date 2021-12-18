import { largestAltitude } from './find-the-highest-altitude';

describe('[Leetcode] largestAltitude', () => {
  test('example #1', () => {
    expect(largestAltitude([-5, 1, 5, 0, -7])).toBe(1);
  });

  test('example #2', () => {
    expect(largestAltitude([-4, -3, -2, -1, 4, 3, 2])).toBe(0);
  });
});
