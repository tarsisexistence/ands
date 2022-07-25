import { solution } from './first-bad-version';

describe('[Leetcode] solution', () => {
  test('example #1', () => {
    expect(solution(p => p === 4)(5)).toBe(4);
  });

  test('example #2', () => {
    expect(solution(p => p === 1)(1)).toBe(1);
  });

  test('example #3', () => {
    expect(solution(p => p === 2)(3)).toBe(2);
  });
});
