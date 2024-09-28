import { numberOfEmployeesWhoMetTarget } from './number-of-employees-who-met-the-target';

describe('[Leetcode] numberOfEmployeesWhoMetTarget', () => {
  test('example #1', () => {
    expect(numberOfEmployeesWhoMetTarget([0, 1, 2, 3, 4], 2)).toBe(3);
  });

  test('example #2', () => {
    expect(numberOfEmployeesWhoMetTarget([5, 1, 4, 2, 2], 6)).toBe(0);
  });
});
