import { calPoints } from './baseball-game';

describe('[Leetcode] calPoints', () => {
  test('example #1', () => {
    expect(calPoints(['5', '2', 'C', 'D', '+'])).toBe(30);
  });

  test('example #2', () => {
    expect(calPoints(['5', '-2', '4', 'C', 'D', '9', '+', '+'])).toBe(27);
  });
});
