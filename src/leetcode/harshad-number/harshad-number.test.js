import { sumOfTheDigitsOfHarshadNumber } from './harshad-number';

describe('[Leetcode] sumOfTheDigitsOfHarshadNumber', () => {
  test('example #1', () => {
    expect(sumOfTheDigitsOfHarshadNumber(18)).toBe(9);
  });

  test('example #2', () => {
    expect(sumOfTheDigitsOfHarshadNumber(19)).toBe(-1);
  });

  test('example #3', () => {
    expect(sumOfTheDigitsOfHarshadNumber(36)).toBe(9);
  });
});
