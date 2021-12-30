import { fileExtension } from './file-extension';

describe('[Other] fileExtension', () => {
  test('example #1', () => {
    expect(fileExtension('')).toBe('');
  });

  test('example #2', () => {
    expect(fileExtension('name')).toBe('');
  });

  test('example #3', () => {
    expect(fileExtension('name.txt')).toBe('txt');
  });

  test('example #4', () => {
    expect(fileExtension('.htpasswd')).toBe('');
  });

  test('example #5', () => {
    expect(fileExtension('name.with.many.dots.myext')).toBe('myext');
  });
});
