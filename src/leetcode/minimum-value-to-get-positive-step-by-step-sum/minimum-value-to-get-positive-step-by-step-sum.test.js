import { minStartValue } from './minimum-value-to-get-positive-step-by-step-sum';

describe('[Leetcode] minStartValue', () => {
  test('example #1', () => {
    expect(minStartValue([-3, 2, -3, 4, 2])).toBe(5);
  });

  test('example #2', () => {
    expect(minStartValue([1, 2])).toBe(1);
  });

  test('example #3', () => {
    expect(minStartValue([1, -2, -3])).toBe(5);
  });
});
