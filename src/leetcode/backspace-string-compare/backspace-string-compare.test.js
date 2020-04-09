import { backspaceCompare } from './backspace-string-compare';

describe('[Leetcode] backspaceCompare', () => {
  test('example #1', () => {
    expect(backspaceCompare('ab#c', 'ad#c')).toBe(true);
  });

  test('example #2', () => {
    expect(backspaceCompare('ab##', 'c#d#')).toBe(true);
  });

  test('example #3', () => {
    expect(backspaceCompare('a##c', '#a#c')).toBe(true);
  });

  test('example #4', () => {
    expect(backspaceCompare('a#c', 'b')).toBe(false);
  });
});
