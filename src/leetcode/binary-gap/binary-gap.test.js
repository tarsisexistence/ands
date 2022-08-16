import { binaryGap } from './binary-gap';

describe('[Leetcode] binaryGap', () => {
  test('example #1', () => {
    expect(binaryGap(22)).toBe(2);
  });

  test('example #2', () => {
    expect(binaryGap(8)).toBe(0);
  });

  test('example #3', () => {
    expect(binaryGap(5)).toBe(2);
  });

  test('example #4', () => {
    expect(binaryGap(13)).toBe(2);
  });
});
