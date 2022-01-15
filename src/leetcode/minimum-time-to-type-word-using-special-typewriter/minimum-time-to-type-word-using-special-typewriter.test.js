import { minTimeToType } from './minimum-time-to-type-word-using-special-typewriter';

describe('[Leetcode] minTimeToType', () => {
  test('example #1', () => {
    expect(minTimeToType('abc')).toBe(5);
  });

  test('example #2', () => {
    expect(minTimeToType('bza')).toBe(7);
  });

  test('example #3', () => {
    expect(minTimeToType('zjpc')).toBe(34);
  });
});
