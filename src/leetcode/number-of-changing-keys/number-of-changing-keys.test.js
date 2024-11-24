import { countKeyChanges } from './number-of-changing-keys';

describe('[Leetcode] countKeyChanges', () => {
  test('example #1', () => {
    expect(countKeyChanges('aAbBcC')).toBe(2);
  });

  test('example #2', () => {
    expect(countKeyChanges('AaAaAaaA')).toBe(0);
  });
});
