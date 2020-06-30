import { divisorGame } from './divisor-game';

describe('[Leetcode] divisorGame', () => {
  test('example #1', () => {
    expect(divisorGame(2)).toBeTruthy();
  });

  test('example #2', () => {
    expect(divisorGame(3)).toBeFalsy();
  });

  test('example #3', () => {
    expect(divisorGame(4)).toBeTruthy();
  });

  test('example #4', () => {
    expect(divisorGame(5)).toBeFalsy();
  });

  test('example #5', () => {
    expect(divisorGame(16)).toBeTruthy();
  });

  test('example #6', () => {
    expect(divisorGame(15)).toBeFalsy();
  });
});
