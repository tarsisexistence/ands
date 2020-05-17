import { fib } from './fibonacci-number';

describe('[Leetcode] fib', () => {
  test('example #1', () => {
    expect(fib(0)).toBe(0);
  });

  test('example #2', () => {
    expect(fib(1)).toBe(1);
  });

  test('example #3', () => {
    expect(fib(2)).toBe(1);
  });

  test('example #4', () => {
    expect(fib(5)).toBe(5);
  });

  test('example #5', () => {
    expect(fib(6)).toBe(8);
  });
});
