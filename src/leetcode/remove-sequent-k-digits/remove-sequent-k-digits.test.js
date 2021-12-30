import { removeSequentKDigits } from './remove-sequent-k-digits';

describe('[Other] removeSequentKDigits', () => {
  test('example #1', () => {
    expect(removeSequentKDigits('1432219', 3)).toBe('1219');
  });

  test('example #2', () => {
    expect(removeSequentKDigits('10200', 1)).toBe('200');
  });

  test('example #3', () => {
    expect(removeSequentKDigits('10200', 2)).toBe('100');
  });

  test('example #4', () => {
    expect(removeSequentKDigits('10200', 3)).toBe('0');
  });

  test('example #5', () => {
    expect(removeSequentKDigits('1432219', 5)).toBe('19');
  });

  test('example #6', () => {
    expect(removeSequentKDigits('10', 2)).toBe('0');
  });
  test('example #7', () => {
    expect(removeSequentKDigits('10', 1)).toBe('0');
  });

  test('example #8', () => {
    expect(removeSequentKDigits('1234567890', 9)).toBe('0');
  });

  test('example #8', () => {
    expect(removeSequentKDigits('1234567890', 4)).toBe('123450');
  });
});
