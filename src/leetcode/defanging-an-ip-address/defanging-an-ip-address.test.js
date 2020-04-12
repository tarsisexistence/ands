import { defangIPAddress } from './defanging-an-ip-address';

describe('[Leetcode] defanging an ip address', () => {
  test('should return defanged ip address for basic input of 1s', () => {
    expect(defangIPAddress('1.1.1.1')).toBe('1[.]1[.]1[.]1');
  });

  test('should return defanged api of different values and digit capacity', () => {
    expect(defangIPAddress('255.100.50.0')).toBe('255[.]100[.]50[.]0');
  });
});
