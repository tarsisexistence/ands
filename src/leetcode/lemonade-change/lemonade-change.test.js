import { lemonadeChange } from './lemonade-change';

describe('[Leetcode] lemonadeChange', () => {
  test('example #1', () => {
    expect(lemonadeChange([5, 5, 5, 10, 20])).toBe(true);
  });

  test('example #2', () => {
    expect(lemonadeChange([5, 5, 10, 10, 20])).toBe(false);
  });

  test('example #3', () => {
    expect(lemonadeChange([5, 5, 5, 10, 5, 5, 10, 20, 20, 20])).toBe(false);
  });

  test('example #4', () => {
    expect(lemonadeChange([5, 5, 10, 20, 5, 5, 5, 5, 5, 5, 5, 5, 5, 10, 5, 5, 20, 5, 20, 5])).toBe(true);
  });

  test('example #5', () => {
    expect(lemonadeChange([5, 10, 10])).toBe(false);
  });
});
