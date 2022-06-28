import { countEven } from './count-integers-with-even-digit-sum';

describe('[Leetcode] countEven', () => {
  test('example #1', () => {
    expect(countEven(4)).toBe(2);
  });

  test('example #2', () => {
    expect(countEven(30)).toBe(14);
  });
});
