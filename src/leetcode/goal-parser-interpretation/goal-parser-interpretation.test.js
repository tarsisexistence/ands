import { interpret } from './goal-parser-interpretation';

describe('[Leetcode] interpret', () => {
  test('example #1', () => {
    expect(interpret('G()(al)')).toBe('Goal');
  });

  test('example #2', () => {
    expect(interpret('G()()()()(al)')).toBe('Gooooal');
  });

  test('example #3', () => {
    expect(interpret('G()(al)')).toBe('Goal');
  });
});
