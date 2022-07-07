import { reverseOnlyLetters } from './reverse-only-letters';

describe('[Leetcode] reverseOnlyLetters', () => {
  test('example #1', () => {
    expect(reverseOnlyLetters('ab-cd')).toBe('dc-ba');
  });

  test('example #2', () => {
    expect(reverseOnlyLetters('a-bC-dEf-ghIj')).toBe('j-Ih-gfE-dCba');
  });

  test('example #3', () => {
    expect(reverseOnlyLetters('Test1ng-Leet=code-Q!')).toBe('Qedo1ct-eeLg=ntse-T!');
  });
});
