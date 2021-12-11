import { truncateSentence } from './truncate-sentence';

describe('[Leetcode] truncateSentence', () => {
  test('example #1', () => {
    expect(truncateSentence('Hello how are you Contestant', 4)).toBe('Hello how are you');
  });

  test('example #2', () => {
    expect(truncateSentence('What is the solution to this problem', 4)).toBe('What is the solution');
  });

  test('example #3', () => {
    expect(truncateSentence('chopper is not a tanuki', 5)).toBe('chopper is not a tanuki');
  });
});
