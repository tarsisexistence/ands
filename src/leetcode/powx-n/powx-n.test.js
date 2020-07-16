import { myPow } from './powx-n';

describe('[Leetcode] myPow', () => {
  test('example #1', () => {
    expect(myPow(2, 10)).toBe(1024);
  });

  test('example #2', () => {
    expect(myPow(2, -2)).toBe(0.25);
  });

  test('example #3', () => {
    expect(myPow(2.1, 3)).toBe(9.261000000000001);
  });

  test('example #4', () => {
    expect(myPow(2.1, 0)).toBe(1);
  });

  test('example #5', () => {
    expect(myPow(-1.0, 2147483647)).toBe(-1);
  });
});
