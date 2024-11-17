import { minElement } from './minimum-element-after-replacement-with-digit-sum';

describe('[Leetcode] minElement', () => {
  test('example #1', () => {
    expect(minElement([10, 12, 13, 14])).toBe(1);
  });

  test('example #2', () => {
    expect(minElement([1, 2, 3, 4])).toBe(1);
  });

  test('example #3', () => {
    expect(minElement([999, 19, 199])).toBe(10);
  });
});
