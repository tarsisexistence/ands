import { countOperations } from './count-operations-to-obtain-zero';

describe('[Leetcode] countOperations', () => {
  test('example #1', () => {
    expect(countOperations(2, 3)).toBe(3);
  });

  test('example #2', () => {
    expect(countOperations(10, 10)).toBe(1);
  });
});
