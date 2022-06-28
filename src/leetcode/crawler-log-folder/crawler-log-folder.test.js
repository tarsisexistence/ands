import { minOperations } from './crawler-log-folder';

describe('[Leetcode] minOperations', () => {
  test('example #1', () => {
    expect(minOperations(['d1/', 'd2/', '../', 'd21/', './'])).toBe(2);
  });

  test('example #2', () => {
    expect(minOperations(['d1/', 'd2/', './', 'd3/', '../', 'd31/'])).toBe(3);
  });

  test('example #3', () => {
    expect(minOperations(['d1/', '../', '../', '../'])).toBe(0);
  });
});
