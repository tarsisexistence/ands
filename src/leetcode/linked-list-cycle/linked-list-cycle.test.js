import { hasCycle } from './linked-list-cycle';
import { createCycledList, createList } from '../../other/create-list/create-list';

describe('[Leetcode] hasCycle', () => {
  test('example #1', () => {
    expect(hasCycle(createCycledList([3, 2, 0, -4], 1))).toBe(true);
  });

  test('example #2', () => {
    expect(hasCycle(createCycledList([1, 2], 0))).toBe(true);
  });

  test('example #3', () => {
    expect(hasCycle(createList([1]))).toBe(false);
  });

  test('example #4', () => {
    expect(hasCycle(createList([3, 2, 0, -4]))).toBe(false);
  });

  test('example #5', () => {
    expect(hasCycle(createCycledList([1, 2, 3, 4, 5, 6], 1))).toBe(true);
  });
});
