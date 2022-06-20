import { digitSum } from './calculate-digit-sum-of-a-string';

describe('[Leetcode] digitSum', () => {
  test('example #1', () => {
    expect(digitSum('11111222223', 3)).toBe('135');
  });

  test('example #2', () => {
    expect(digitSum('00000000', 3)).toBe('000');
  });

  test('example #3', () => {
    expect(digitSum('1234', 2)).toBe('37');
  });
});
