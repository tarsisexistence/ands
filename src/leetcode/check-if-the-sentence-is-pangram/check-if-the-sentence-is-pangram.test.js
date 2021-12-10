import { checkIfPangram } from './check-if-the-sentence-is-pangram';

describe('[Leetcode] checkIfPangram', () => {
  test('example #1', () => {
    expect(checkIfPangram('thequickbrownfoxjumpsoverthelazydog')).toBe(true);
  });

  test('example #2', () => {
    expect(checkIfPangram('leetcode')).toBe(false);
  });
});
