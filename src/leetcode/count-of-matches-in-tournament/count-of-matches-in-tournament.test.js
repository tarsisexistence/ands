import { numberOfMatches } from './count-of-matches-in-tournament';

describe('[Leetcode] numberOfMatches', () => {
  test('example #1', () => {
    expect(numberOfMatches(7)).toBe(6);
  });

  test('example #2', () => {
    expect(numberOfMatches(14)).toBe(13);
  });

  test('example #3', () => {
    expect(numberOfMatches(10)).toBe(9);
  });

  test('example #5', () => {
    expect(numberOfMatches(9)).toBe(8);
  });

  test('example #4', () => {
    expect(numberOfMatches(8)).toBe(7);
  });
});
