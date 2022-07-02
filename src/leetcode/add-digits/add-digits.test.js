import { addDigits } from './add-digits';

describe('[Leetcode] addDigits', () => {
  test('example #1', () => {
    expect(addDigits(38)).toBe(2);
  });

  test('example #2', () => {
    expect(addDigits(0)).toBe(0);
  });
});
