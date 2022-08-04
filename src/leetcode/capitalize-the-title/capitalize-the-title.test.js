import { capitalizeTitle } from './capitalize-the-title';

describe('[Leetcode] capitalizeTitle', () => {
  test('example #1', () => {
    expect(capitalizeTitle('capiTalIze tHe titLe')).toBe('Capitalize The Title');
  });

  test('example #2', () => {
    expect(capitalizeTitle('First leTTeR of EACH Word')).toBe('First Letter of Each Word');
  });

  test('example #3', () => {
    expect(capitalizeTitle('i lOve leetcode')).toBe('i Love Leetcode');
  });
});
