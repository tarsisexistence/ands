import { sortSentence } from './sorting-the-sentence';

describe('[Leetcode] sortSentence', () => {
  test('example #1', () => {
    expect(sortSentence('is2 sentence4 This1 a3')).toBe('This is a sentence');
  });

  test('example #2', () => {
    expect(sortSentence('Myself2 Me1 I4 and3')).toBe('Me Myself and I');
  });
});
