import { addStrings } from './add-strings';

describe('[Leetcode] addStrings', () => {
  test('example #1', () => {
    expect(addStrings('11', '123')).toBe('134');
  });

  test('example #2', () => {
    expect(addStrings('456', '77')).toBe('533');
  });

  test('example #3', () => {
    expect(addStrings('0', '0')).toBe('0');
  });
});
