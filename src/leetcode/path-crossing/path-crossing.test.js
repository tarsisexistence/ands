import { isPathCrossing } from './path-crossing';

describe('[Leetcode] isPathCrossing', () => {
  test('example #1', () => {
    expect(isPathCrossing('NES')).toBe(false);
  });

  test('example #2', () => {
    expect(isPathCrossing('NESWW')).toBe(true);
  });
});
