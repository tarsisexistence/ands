import { finalPositionOfSnake } from './snake-in-matrix';

describe('[Leetcode] finalPositionOfSnake', () => {
  test('example #1', () => {
    expect(finalPositionOfSnake(2, ['RIGHT', 'DOWN'])).toBe(3);
  });

  test('example #2', () => {
    expect(finalPositionOfSnake(3, ['DOWN', 'RIGHT', 'UP'])).toBe(1);
  });
});
