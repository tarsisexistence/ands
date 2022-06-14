import { prefixCount } from './counting-words-with-a-given-prefix';

describe('[Leetcode] prefixCount', () => {
  test('example #1', () => {
    expect(prefixCount(['pay', 'attention', 'practice', 'attend'], 'at')).toBe(2);
  });

  test('example #2', () => {
    expect(prefixCount(['leetcode', 'win', 'loops', 'success'], 'code')).toBe(0);
  });
});
