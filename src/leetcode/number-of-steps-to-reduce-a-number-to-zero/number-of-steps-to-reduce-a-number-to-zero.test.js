import { numberOfSteps } from './number-of-steps-to-reduce-a-number-to-zero';

describe('[Leetcode] numberOfSteps', () => {
  test('example #1', () => {
    expect(numberOfSteps(14)).toBe(6);
  });

  test('example #2', () => {
    expect(numberOfSteps(8)).toBe(4);
  });

  test('example #3', () => {
    expect(numberOfSteps(123)).toBe(12);
  });
});
