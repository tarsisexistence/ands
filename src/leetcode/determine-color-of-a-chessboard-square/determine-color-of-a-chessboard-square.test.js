import { squareIsWhite } from './determine-color-of-a-chessboard-square';

describe('[Leetcode] squareIsWhite', () => {
  test('example #1', () => {
    expect(squareIsWhite('a1')).toBe(false);
  });

  test('example #2', () => {
    expect(squareIsWhite('h3')).toBe(true);
  });

  test('example #3', () => {
    expect(squareIsWhite('c7')).toBe(false);
  });
});
