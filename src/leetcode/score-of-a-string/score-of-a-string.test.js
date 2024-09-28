import { scoreOfString } from './score-of-a-string';

describe('[Leetcode] scoreOfString', () => {
  test('example #1', () => {
    expect(scoreOfString('hello')).toBe(13);
  });

  test('example #2', () => {
    expect(scoreOfString('zaz')).toBe(50);
  });
});
