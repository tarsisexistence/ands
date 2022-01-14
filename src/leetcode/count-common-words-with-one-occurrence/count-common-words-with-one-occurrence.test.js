import { countWords } from './count-common-words-with-one-occurrence';

describe('[Leetcode] countWords', () => {
  test('example #1', () => {
    expect(countWords(['leetcode', 'is', 'amazing', 'as', 'is'], ['amazing', 'leetcode', 'is'])).toBe(2);
  });

  test('example #2', () => {
    expect(countWords(['b', 'bb', 'bbb'], ['a', 'aa', 'aaa'])).toBe(0);
  });

  test('example #3', () => {
    expect(countWords(['a', 'ab'], ['a', 'a', 'a', 'ab'])).toBe(1);
  });
});
