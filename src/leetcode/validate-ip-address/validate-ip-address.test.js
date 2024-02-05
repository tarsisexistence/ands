import { validIPAddress } from './validate-ip-address';

describe('[Leetcode] validIPAddress', () => {
  test('example #1', () => {
    expect(validIPAddress('172.16.254.1')).toBe('IPv4');
  });

  test('example #2', () => {
    expect(validIPAddress('172.16.254.01')).toBe('Neither');
  });

  test('example #3', () => {
    expect(validIPAddress('256.256.256.256')).toBe('Neither');
  });

  test('example #4', () => {
    expect(validIPAddress('2001:0db8:85a3:0000:0000:8a2e:0370:7334')).toBe('IPv6');
  });

  test('example #5', () => {
    expect(validIPAddress('2001:db8:85a3:0:0:8A2E:0370:7334')).toBe('IPv6');
  });

  test('example #6', () => {
    expect(validIPAddress('2001:0db8:85a3::8A2E:0370:7334')).toBe('Neither');
  });

  test('example #7', () => {
    expect(validIPAddress('02001:0db8:85a3:0000:0000:8a2e:0370:7334')).toBe('Neither');
  });

  test('example #8', () => {
    expect(validIPAddress('0201:0db8:85a3:0000:0000:8a2e:0370:7334')).toBe('IPv6');
  });

  test('example #9', () => {
    expect(validIPAddress('1e1.4.5.6')).toBe('Neither');
  });

  test('example #10', () => {
    expect(validIPAddress('20EE:FGb8:85a3:0:0:8A2E:0370:7334')).toBe('Neither');
  });

  test('example #11', () => {
    expect(validIPAddress('2001:0db8:85a3:0:0:8A2E:0370:7334')).toBe('IPv6');
  });

  test('example #12', () => {
    expect(validIPAddress('192.0.0.1')).toBe('IPv4');
  });
});
