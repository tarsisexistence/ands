import { insertIterableGenerator, insertIterator, iterableGenerator } from './iterable';

describe('[Other] Iterable', () => {
  test('should iterate array over iterableGenerator', () => {
    const object = {
      [Symbol.iterator]: function () {
        return iterableGenerator(['first', 'second', 'third']);
      }
    };
    expect([...object]).toEqual(['first', 'second', 'third']);
  });

  test('should iterate object over iterableGenerator', () => {
    const object = {
      items: ['first', 'second', 'third'],
      [Symbol.iterator]: function () {
        return iterableGenerator(this.items);
      }
    };
    expect([...object]).toEqual(['first', 'second', 'third']);
  });

  test('should insert iterableGenerator', () => {
    const object = {
      items: ['first', 'second', 'third'],
      ...insertIterableGenerator('items')
    };
    expect([...object]).toEqual(['first', 'second', 'third']);
  });

  test('should insert iterableGenerator with another prop', () => {
    const object = {
      elements: ['first', 'second', 'third'],
      ...insertIterableGenerator('elements')
    };
    expect([...object]).toEqual(['first', 'second', 'third']);
  });

  test('should iterate with iterator', () => {
    const object = {
      items: ['first', 'second', 'third'],
      [Symbol.iterator]: function () {
        const ref = this;
        ref.counter = -1;
        return {
          next: function () {
            ref.counter += 1;
            return ref.counter >= ref.items.length ? { done: true } : { done: false, value: ref.items[ref.counter] };
          }
        };
      }
    };
    expect([...object]).toEqual(['first', 'second', 'third']);
  });

  test('should insert iterator', () => {
    const object = {
      items: ['first', 'second', 'third'],
      ...insertIterator('items')
    };
    expect([...object]).toEqual(['first', 'second', 'third']);
  });
});
