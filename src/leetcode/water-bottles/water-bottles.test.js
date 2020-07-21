import { numWaterBottles } from './water-bottles';

describe('[Leetcode] numWaterBottles', () => {
  test('example #1', () => {
    expect(numWaterBottles(9, 3)).toBe(13);
  });

  test('example #2', () => {
    expect(numWaterBottles(15, 4)).toBe(19);
  });

  test('example #3', () => {
    expect(numWaterBottles(5, 5)).toBe(6);
  });

  test('example #4', () => {
    expect(numWaterBottles(2, 3)).toBe(2);
  });

  test('example #5', () => {
    expect(numWaterBottles(16, 4)).toBe(21);
  });

  test('example #6', () => {
    expect(numWaterBottles(17, 4)).toBe(22);
  });

  test('example #7', () => {
    expect(numWaterBottles(3, 2)).toBe(5);
  });

  test('example #8', () => {
    expect(numWaterBottles(15, 7)).toBe(17);
  });
});
