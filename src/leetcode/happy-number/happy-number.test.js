import { isHappy } from './happy-number';

describe('[Leetcode] isHappy', () => {
  test('example #1', () => {
    expect(isHappy(19)).toBeTruthy();
  });

  test('example #2', () => {
    expect(isHappy(1111111)).toBeTruthy();
  });

  test('example #3', () => {
    expect(isHappy(111111)).toBeFalsy();
  });

  test('example #4', () => {
    expect(isHappy(7)).toBeTruthy();
  });
});
