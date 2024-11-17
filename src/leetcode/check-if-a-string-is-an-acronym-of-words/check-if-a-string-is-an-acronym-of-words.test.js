import { isAcronym } from './check-if-a-string-is-an-acronym-of-words';

describe('[Leetcode] isAcronym', () => {
  test('example #1', () => {
    expect(isAcronym(['alice', 'bob', 'charlie'], 'abc')).toBe(true);
  });

  test('example #2', () => {
    expect(isAcronym(['an', 'apple'], 'a')).toBe(false);
  });

  test('example #3', () => {
    expect(isAcronym(['never', 'gonna', 'give', 'up', 'on', 'you'], 'ngguoy')).toBe(true);
  });
});
