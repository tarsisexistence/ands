import { sum } from './add-two-integers';

describe('[Leetcode] sum', () => {
  test('example #1', () => {
    expect(sum(12, 5)).toBe(17);
  });

  test('example #2', () => {
    expect(sum(-10, 4)).toBe(-6);
  });
});
