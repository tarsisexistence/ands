import { xorOperation } from './xor-operation-in-an-array';

describe('[Leetcode] sumRootToLeaf', () => {
  test('example #1', () => {
    expect(xorOperation(5, 0)).toBe(8);
  });

  test('example #2', () => {
    expect(xorOperation(4, 3)).toBe(8);
  });

  test('example #3', () => {
    expect(xorOperation(1, 7)).toBe(7);
  });

  test('example #4', () => {
    expect(xorOperation(10, 5)).toBe(2);
  });
});
