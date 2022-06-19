import { recursiveReduce } from './recursive-reduce';

describe('[Other] recursiveReduce', () => {
  test('example #1', () => {
    expect(recursiveReduce([1, 2, 3], (acc, value) => acc + value, 0)).toBe(6);
  });

  test('example #2', () => {
    expect(recursiveReduce([1, 2, 3], (acc, value) => acc + value, '')).toBe('123');
  });

  test('example #3', () => {
    expect(recursiveReduce([1, 2, 3], (acc, value) => [...acc, String(value)], [])).toEqual(['1', '2', '3']);
  });
});
