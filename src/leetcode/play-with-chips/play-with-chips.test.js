import { minCostToMoveChips } from './play-with-chips';

describe('[Leetcode] minCostToMoveChips', () => {
  test('example #1', () => {
    expect(minCostToMoveChips([1, 2, 3])).toBe(1);
  });

  test('example #2', () => {
    expect(minCostToMoveChips([2, 2, 2, 3, 3])).toBe(2);
  });

  test('example #3', () => {
    expect(minCostToMoveChips([1, 2, 2, 2, 2])).toBe(1);
  });

  test('example #4', () => {
    expect(minCostToMoveChips([1, 3, 3, 3, 3])).toBe(0);
  });

  test('example #5', () => {
    expect(minCostToMoveChips([6, 3, 3, 3, 3])).toBe(1);
  });

  test('example #6', () => {
    expect(minCostToMoveChips([6, 3, 6, 3, 3])).toBe(2);
  });
});
