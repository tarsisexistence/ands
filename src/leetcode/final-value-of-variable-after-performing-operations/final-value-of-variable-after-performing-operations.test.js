import { finalValueAfterOperations } from './final-value-of-variable-after-performing-operations';

describe('[Leetcode] finalValueAfterOperations', () => {
  test('example #1', () => {
    expect(finalValueAfterOperations(['--X', 'X++', 'X++'])).toBe(1);
  });

  test('example #2', () => {
    expect(finalValueAfterOperations(['++X', '++X', 'X++'])).toBe(3);
  });

  test('example #3', () => {
    expect(finalValueAfterOperations(['X++', '++X', '--X', 'X--'])).toBe(0);
  });
});
