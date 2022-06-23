import { totalMoney } from './calculate-money-in-leetcode-bank';

describe('[Leetcode] totalMoney', () => {
  test('example #1', () => {
    expect(totalMoney(4)).toBe(10);
  });

  test('example #2', () => {
    expect(totalMoney(10)).toBe(37);
  });

  test('example #3', () => {
    expect(totalMoney(20)).toBe(96);
  });
});
