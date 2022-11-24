import { findRestaurant } from './minimum-index-sum-of-two-lists';

describe('[Leetcode] findRestaurant', () => {
  test('example #1', () => {
    expect(
      findRestaurant(
        ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'],
        ['Piatti', 'The Grill at Torrey Pines', 'Hungry Hunter Steakhouse', 'Shogun']
      )
    ).toEqual(['Shogun']);
  });

  test('example #2', () => {
    expect(
      findRestaurant(['Shogun', 'Tapioca Express', 'Burger King', 'KFC'], ['KFC', 'Shogun', 'Burger King'])
    ).toEqual(['Shogun']);
  });

  test('example #3', () => {
    expect(findRestaurant(['happy', 'sad', 'good'], ['sad', 'happy', 'good'])).toEqual(['sad', 'happy']);
  });
});
