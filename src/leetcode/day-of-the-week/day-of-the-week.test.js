import { dayOfTheWeek } from './day-of-the-week';

describe('[Leetcode] dayOfTheWeek', () => {
  test('example #1', () => {
    expect(dayOfTheWeek(31, 8, 2019)).toBe('Saturday');
  });

  test('example #2', () => {
    expect(dayOfTheWeek(18, 7, 1999)).toBe('Sunday');
  });

  test('example #3', () => {
    expect(dayOfTheWeek(15, 8, 1993)).toBe('Sunday');
  });
});
