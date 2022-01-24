import { areNumbersAscending } from './check-if-numbers-are-ascending-in-a-sentence';

describe('[Leetcode] areNumbersAscending', () => {
  test('example #1', () => {
    expect(areNumbersAscending('1 box has 3 blue 4 red 6 green and 12 yellow marbles')).toBe(true);
  });

  test('example #2', () => {
    expect(areNumbersAscending('hello world 5 x 5')).toBe(false);
  });

  test('example #3', () => {
    expect(areNumbersAscending('sunset is at 7 51 pm overnight lows will be in the low 50 and 60 s')).toBe(false);
  });
});
