import { argumentsLength } from './return-length-of-arguments-passed';

describe('[Leetcode] argumentsLength', () => {
  test('example #1', () => {
    expect(argumentsLength(5)).toBe(1);
  });

  test('example #2', () => {
    expect(argumentsLength({}, null, '3')).toBe(3);
  });

  test('mixed types', () => {
    expect(argumentsLength(1, true, [], {}, 'hello')).toBe(5);
  });

  test('no arguments', () => {
    expect(argumentsLength()).toBe(0);
  });
});
