import { sortPeople } from './sort-the-people';

describe('[Leetcode] sortPeople', () => {
  test('example #1', () => {
    expect(sortPeople(['Mary', 'John', 'Emma'], [180, 165, 170])).toEqual(['Mary', 'Emma', 'John']);
  });

  test('example #2', () => {
    expect(sortPeople(['Alice', 'Bob', 'Bob'], [155, 185, 150])).toEqual(['Bob', 'Alice', 'Bob']);
  });
});
