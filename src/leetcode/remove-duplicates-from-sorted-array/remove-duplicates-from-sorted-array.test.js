import { removeDuplicates } from './remove-duplicates-from-sorted-array';

describe('[Leetcode] removeDuplicates', () => {
  test('example #1', () => {
    const arr = [1, 1, 2];
    const output = removeDuplicates(arr);

    expect(output).toBe(2);
    expect(arr.slice(0, output)).toEqual([1, 2]);
  });

  test('example #2', () => {
    const arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    const output = removeDuplicates(arr);

    expect(output).toBe(5);
    expect(arr.slice(0, output)).toEqual([0, 1, 2, 3, 4]);
  });
});
