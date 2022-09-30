import { canFormArray } from './check-array-formation-through-concatenation';

describe('[Leetcode] canFormArray', () => {
  test('example #1', () => {
    expect(canFormArray([15, 88], [[88], [15]])).toBe(true);
  });

  test('example #2', () => {
    expect(canFormArray([49, 18, 16], [[16, 18, 49]])).toBe(false);
  });

  test('example #3', () => {
    expect(canFormArray([91, 4, 64, 78], [[78], [4, 64], [91]])).toBe(true);
  });

  test('example #4', () => {
    expect(canFormArray([1, 2, 3], [[2], [1, 3]])).toBe(false);
  });

  test('example #5', () => {
    expect(canFormArray([1, 5, 2], [[2], [1, 5]])).toBe(true);
  });
});
