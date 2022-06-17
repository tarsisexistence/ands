import { countTriples } from './count-square-sum-triples';

describe('[Leetcode] countTriples', () => {
  test('example #1', () => {
    expect(countTriples(5)).toBe(2);
  });

  test('example #2', () => {
    expect(countTriples(10)).toBe(4);
  });
});
