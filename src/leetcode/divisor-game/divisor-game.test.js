import { divisorGame } from './divisor-game';

describe('[Leetcode] divisorGame', () => {
  test('example #1', () => {
    expect(divisorGame(2)).toBe(true);
  });

  test('example #2', () => {
    expect(divisorGame(3)).toBe(false);
  });

  test('example #3', () => {
    expect(divisorGame(4)).toBe(true);
  });

  test('example #4', () => {
    expect(divisorGame(5)).toBe(false);
  });

  test('example #5', () => {
    expect(divisorGame(16)).toBe(true);
  });

  test('example #6', () => {
    expect(divisorGame(15)).toBe(false);
  });
});
