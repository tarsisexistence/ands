import { countSeniors } from './number-of-senior-citizens';

describe('[Leetcode] countSeniors', () => {
  test('example #1', () => {
    expect(countSeniors(['7868190130M7522', '5303914400F9211', '9273338290F4010'])).toBe(2);
  });

  test('example #2', () => {
    expect(countSeniors(['1313579440F2036', '2921522980M5644'])).toBe(0);
  });
});
