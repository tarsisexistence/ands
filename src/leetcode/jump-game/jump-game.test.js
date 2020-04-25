import { canJump } from './jump-game';

describe('[Leetcode] canJump', () => {
  test('example #1', () => {
    expect(canJump([2, 3, 1, 1, 4])).toBeTruthy();
  });

  test('example #2', () => {
    expect(canJump([3, 2, 1, 0, 4])).toBeFalsy();
  });

  test('example #3', () => {
    expect(canJump([3, 5, 1, 0, 0, 0, 0, 0, 0, 0, 0, 10, 4])).toBeFalsy();
  });
});
