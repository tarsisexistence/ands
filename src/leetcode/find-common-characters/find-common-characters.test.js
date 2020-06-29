import { commonChars } from './find-common-characters';

describe('[Leetcode] commonChars', () => {
  test('example #1', () => {
    expect(commonChars(['bella', 'label', 'roller'])).toEqual(['e', 'l', 'l']);
  });

  test('example #2', () => {
    expect(commonChars(['cool', 'lock', 'cook'])).toEqual(['c', 'o']);
  });
});
