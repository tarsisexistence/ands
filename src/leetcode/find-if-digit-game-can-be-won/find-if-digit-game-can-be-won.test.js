import { canAliceWin } from './find-if-digit-game-can-be-won';

describe('[Leetcode] canAliceWin', () => {
  test('example #1', () => {
    expect(canAliceWin([1, 2, 3, 4, 10])).toBe(false);
  });

  test('example #2', () => {
    expect(canAliceWin([1, 2, 3, 4, 5, 14])).toBe(true);
  });

  test('example #3', () => {
    expect(canAliceWin([5, 5, 5, 25])).toBe(true);
  });
});
