import { isPerfectSquare } from './valid-perfect-square';

describe('[Leetcode] isPerfectSquare', () => {
  test('example #1', () => {
    expect(isPerfectSquare(16)).toBeTruthy();
  });

  test('example #2', () => {
    expect(isPerfectSquare(14)).toBeFalsy();
  });

  test('example #3', () => {
    expect(isPerfectSquare(4)).toBeTruthy();
  });
});
