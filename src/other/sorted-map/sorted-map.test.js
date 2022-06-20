import { create, reduce, set, SORTED_MAP_COMPARATOR_KEY } from './sorted-map';

describe('[Other] sorted-map', () => {
  describe('create', () => {
    test('should get the same sequence', () => {
      const comparator = (a, b) => a - b;
      const map = create(
        [
          ['a', 0],
          ['b', 1],
          ['c', 2]
        ],
        comparator
      );

      expect([...map.entries()]).toEqual([
        ['a', 0],
        ['b', 1],
        ['c', 2],
        [SORTED_MAP_COMPARATOR_KEY, comparator]
      ]);
    });

    test('should get correct sequence', () => {
      const comparator = (a, b) => a - b;
      const map = create(
        [
          ['c', 2],
          ['a', 0],
          ['b', 1]
        ],
        comparator
      );

      expect([...map.entries()]).toEqual([
        ['a', 0],
        ['b', 1],
        ['c', 2],
        [SORTED_MAP_COMPARATOR_KEY, comparator]
      ]);
    });

    test('should get sequence by desc', () => {
      const comparator = (a, b) => b - a;
      const map = create(
        [
          ['a', 0],
          ['c', 2],
          ['b', 1]
        ],
        comparator
      );

      expect([...map.entries()]).toEqual([
        ['c', 2],
        ['b', 1],
        ['a', 0],
        [SORTED_MAP_COMPARATOR_KEY, comparator]
      ]);
    });

    test('should sort chars by asc', () => {
      const comparator = (a, b) => a.charCodeAt() - b.charCodeAt();
      const map = create(
        [
          ['first', 'b'],
          ['second', 'c'],
          ['third', 'a']
        ],
        comparator
      );

      expect([...map.entries()]).toEqual([
        ['third', 'a'],
        ['first', 'b'],
        ['second', 'c'],
        [SORTED_MAP_COMPARATOR_KEY, comparator]
      ]);
    });

    test('should sort by booleans', () => {
      const comparator = a => (a ? -1 : 1);
      const map = create(
        [
          ['a', true],
          ['b', false],
          ['c', true],
          ['d', false]
        ],
        comparator
      );

      // order changed because of comparator
      expect([...map.entries()]).toEqual([
        ['c', true],
        ['a', true],
        ['b', false],
        ['d', false],
        [SORTED_MAP_COMPARATOR_KEY, comparator]
      ]);
    });

    test('should preserve initial sorting order of the same values', () => {
      const comparator = (a, b) => a - b;
      const map = create(
        [
          ['a', 2],
          ['c', 2]
        ],
        comparator
      );

      expect([...map.entries()]).toEqual([
        ['a', 2],
        ['c', 2],
        [SORTED_MAP_COMPARATOR_KEY, comparator]
      ]);
    });
  });

  describe('set', () => {
    test('should return the same map when key is internal property', () => {
      const comparator = (a, b) => a - b;
      const map = create(
        [
          ['a', 0],
          ['b', 1],
          ['c', 2]
        ],
        comparator
      );
      set(map, SORTED_MAP_COMPARATOR_KEY, 100);

      expect([...map.entries()]).toEqual([
        ['a', 0],
        ['b', 1],
        ['c', 2],
        [SORTED_MAP_COMPARATOR_KEY, comparator]
      ]);
    });

    test('should update the order if key already present with lower value', () => {
      const comparator = (a, b) => a - b;
      const map = create(
        [
          ['a', 0],
          ['b', 1],
          ['c', 2]
        ],
        comparator
      );
      set(map, 'b', -1);

      expect([...map.entries()]).toEqual([
        ['b', -1],
        ['a', 0],
        ['c', 2],
        [SORTED_MAP_COMPARATOR_KEY, comparator]
      ]);
    });

    test('should update the order if key already present with greater value', () => {
      const comparator = (a, b) => a - b;
      const map = create(
        [
          ['a', 0],
          ['b', 1],
          ['c', 2]
        ],
        comparator
      );
      set(map, 'b', 3);

      expect([...map.entries()]).toEqual([
        ['a', 0],
        ['c', 2],
        ['b', 3],
        [SORTED_MAP_COMPARATOR_KEY, comparator]
      ]);
    });

    test('should set in the beginning by asc', () => {
      const comparator = (a, b) => a - b;
      const map = create(
        [
          ['b', 1],
          ['c', 2]
        ],
        comparator
      );
      set(map, 'a', 0);

      expect([...map.entries()]).toEqual([
        ['a', 0],
        ['b', 1],
        ['c', 2],
        [SORTED_MAP_COMPARATOR_KEY, comparator]
      ]);
    });

    test('should set in the middle by asc', () => {
      const comparator = (a, b) => a - b;
      const map = create(
        [
          ['a', 0],
          ['c', 2]
        ],
        comparator
      );
      set(map, 'b', 1);

      expect([...map.entries()]).toEqual([
        ['a', 0],
        ['b', 1],
        ['c', 2],
        [SORTED_MAP_COMPARATOR_KEY, comparator]
      ]);
    });

    test('should set in the end by asc', () => {
      const comparator = (a, b) => a - b;
      const map = create(
        [
          ['a', 0],
          ['b', 1]
        ],
        comparator
      );
      set(map, 'c', 2);

      expect([...map.entries()]).toEqual([
        ['a', 0],
        ['b', 1],
        ['c', 2],
        [SORTED_MAP_COMPARATOR_KEY, comparator]
      ]);
    });

    test('should set in the beginning by desc', () => {
      const comparator = (a, b) => b - a;
      const map = create(
        [
          ['b', 1],
          ['c', 2]
        ],
        comparator
      );
      set(map, 'a', 3);

      expect([...map.entries()]).toEqual([
        ['a', 3],
        ['c', 2],
        ['b', 1],
        [SORTED_MAP_COMPARATOR_KEY, comparator]
      ]);
    });

    test('should set in the middle by desc', () => {
      const comparator = (a, b) => b - a;
      const map = create(
        [
          ['a', 0],
          ['c', 2]
        ],
        comparator
      );
      set(map, 'b', 1);

      expect([...map.entries()]).toEqual([
        ['c', 2],
        ['b', 1],
        ['a', 0],
        [SORTED_MAP_COMPARATOR_KEY, comparator]
      ]);
    });

    test('should set in the end by desc', () => {
      const comparator = (a, b) => b - a;
      const map = create(
        [
          ['a', 0],
          ['b', 1]
        ],
        comparator
      );
      set(map, 'c', -1);

      expect([...map.entries()]).toEqual([
        ['b', 1],
        ['a', 0],
        ['c', -1],
        [SORTED_MAP_COMPARATOR_KEY, comparator]
      ]);
    });
  });

  describe('reduce', () => {
    test('should return new map with the same [K,V]', () => {
      const comparator = (a, b) => a - b;
      const map = create(
        [
          ['a', 0],
          ['b', 1],
          ['c', 2]
        ],
        comparator
      );
      const reducedMap = reduce(
        map,
        (m, v, k) => {
          m.set(k, v);
          return m;
        },
        new Map()
      );

      expect([...reducedMap.entries()]).toEqual([
        ['a', 0],
        ['b', 1],
        ['c', 2],
        [SORTED_MAP_COMPARATOR_KEY, comparator]
      ]);
    });

    test('should return map with all key values reduced by -1', () => {
      const comparator = (a, b) => a - b;
      const map = create(
        [
          ['a', 0],
          ['b', 1],
          ['c', 2]
        ],
        comparator
      );
      const reducedMap = reduce(
        map,
        (m, v, k) => {
          if (k === SORTED_MAP_COMPARATOR_KEY) {
            m.set(k, v);
          } else {
            m.set(k, v - 1);
          }
          return m;
        },
        new Map()
      );

      expect([...reducedMap.entries()]).toEqual([
        ['a', -1],
        ['b', 0],
        ['c', 1],
        [SORTED_MAP_COMPARATOR_KEY, comparator]
      ]);
    });

    test('should return sum of all values', () => {
      const comparator = (a, b) => a - b;
      const map = create(
        [
          ['a', 0],
          ['b', 1],
          ['c', 2]
        ],
        comparator
      );
      const reducedValue = reduce(map, (acc, v, k) => (k === SORTED_MAP_COMPARATOR_KEY ? acc : acc + v), 0);

      expect(reducedValue).toBe(3);
    });
  });
});
