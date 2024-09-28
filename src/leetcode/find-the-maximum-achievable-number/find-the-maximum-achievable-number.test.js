import { theMaximumAchievableX } from './find-the-maximum-achievable-number';

describe('[Leetcode] theMaximumAchievableX', () => {
  test('example #1', () => {
    expect(theMaximumAchievableX(4, 1)).toBe(6);
  });

  test('example #2', () => {
    expect(theMaximumAchievableX(3, 2)).toBe(7);
  });
});
