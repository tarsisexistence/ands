import { numIslands } from './number-of-islands';

describe('[Leetcode] numIslands', () => {
  test('example #1', () => {
    expect(
      numIslands([
        ['1', '1', '1', '1', '0'],
        ['1', '1', '0', '1', '0'],
        ['1', '1', '0', '0', '0'],
        ['0', '0', '0', '0', '0']
      ])
    ).toBe(1);
  });

  test('example #2', () => {
    expect(
      numIslands([
        ['1', '1', '1', '1', '1', '1', '1'],
        ['0', '0', '0', '0', '0', '0', '1'],
        ['1', '1', '1', '1', '1', '0', '1'],
        ['1', '0', '0', '0', '1', '0', '1'],
        ['1', '0', '1', '0', '1', '0', '1'],
        ['1', '0', '1', '1', '1', '0', '1'],
        ['1', '1', '1', '1', '1', '1', '1']
      ])
    ).toBe(1);
  });

  test('example #3', () => {
    expect(numIslands([])).toBe(0);
  });

  test('example #4', () => {
    expect(numIslands([['1'], ['1']])).toBe(1);
  });
});
