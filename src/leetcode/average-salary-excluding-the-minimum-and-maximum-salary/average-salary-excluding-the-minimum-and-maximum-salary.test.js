import { average } from './average-salary-excluding-the-minimum-and-maximum-salary';

describe('[Leetcode] average', () => {
  test('example #1', () => {
    expect(average([4000, 3000, 1000, 2000])).toBe(2500);
  });

  test('example #2', () => {
    expect(average([1000, 2000, 3000])).toBe(2000);
  });

  test('example #3', () => {
    expect(average([6000, 5000, 4000, 3000, 2000, 1000])).toBe(3500);
  });

  test('example #4', () => {
    expect(average([8000, 9000, 2000, 3000, 6000, 1000])).toBe(4750);
  });
});
