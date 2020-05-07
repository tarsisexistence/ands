import { destCity } from './destination-city';

describe('[Leetcode] destCity', () => {
  test('example #1', () => {
    expect(
      destCity([
        ['London', 'New York'],
        ['New York', 'Lima'],
        ['Lima', 'Sao Paulo']
      ])
    ).toBe('Sao Paulo');
  });

  test('example #2', () => {
    expect(
      destCity([
        ['B', 'C'],
        ['D', 'B'],
        ['C', 'A']
      ])
    ).toBe('A');
  });

  test('example #3', () => {
    expect(destCity([['A', 'Z']])).toBe('Z');
  });
});
