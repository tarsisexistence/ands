import { maxScore } from './maximum-score-after-splitting-a-string';

describe('[Leetcode] maxScore', () => {
  test('example #1', () => {
    expect(maxScore('011101')).toBe(5);
  });

  test('example #2', () => {
    expect(maxScore('00111')).toBe(5);
  });

  test('example #3', () => {
    expect(maxScore('1111')).toBe(3);
  });
});
