import { arrangeCoins } from './arranging-coins';

describe('[Leetcode] arrangeCoins', () => {
  test('example #1', () => {
    expect(arrangeCoins(5)).toBe(2);
  });

  test('example #2', () => {
    expect(arrangeCoins(8)).toBe(3);
  });

  test('example #3', () => {
    expect(arrangeCoins(10)).toBe(4);
  });

  test('example #4', () => {
    expect(arrangeCoins(11)).toBe(4);
  });

  test('example #5', () => {
    expect(arrangeCoins(1)).toBe(1);
  });

  test('example #6', () => {
    expect(arrangeCoins(0)).toBe(0);
  });

  test('example #7', () => {
    expect(arrangeCoins(1804289383)).toBe(60070);
  });
});
