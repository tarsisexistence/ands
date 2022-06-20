export const SORTED_MAP_COMPARATOR_KEY = '__ds__'; // TODO: should not be iterable

/**
 * interface SortedMap<K, V> {}
 * type Order = -1 | 0 | 1
 *
 * declare function create<K, V>(
 *   pairs: [K, V][],
 *   comparator: (v1: V, v2: V) => Order
 * ): SortedMap<K, V>
 * declare function set<K, V>(map: SortedMap<K, V>, key: K, value: V): SortedMap<K, V>
 * declare function reduce<K, V, U>(map: SortedMap<K, V>, f: (acc: U, value: V, key: K) => U, initial: U): U
 */

/**
 * declare function create<K, V>(
 *   pairs: [K, V][],
 *   comparator: (v1: V, v2: V) => Order
 * ): SortedMap<K, V>
 **/
export function create(pairs, comparator) {
  const copiedPairs = pairs.slice();
  const indicesByKey = new Map(copiedPairs.map((pair, index) => [pair[0], index]));
  const sortedPairs = copiedPairs.sort((a, b) => {
    const comparison = comparator(a[1], b[1]);
    return comparison === 0 ? indicesByKey.get(a[0]) - indicesByKey.get(b[0]) : comparison;
  });
  const map = new Map(sortedPairs);

  map.set(SORTED_MAP_COMPARATOR_KEY, comparator);

  return map;
}

/**
 * declare function set<K, V>(map: SortedMap<K, V>, key: K, value: V): SortedMap<K, V>
 **/
export function set(map, key, value) {
  if (key === SORTED_MAP_COMPARATOR_KEY) {
    return map;
  }

  /**
   * it will be compared and set inside the loop
   */
  if (map.has(key)) {
    map.delete(key);
  }

  let isSet = false;

  const comparator = map.get(SORTED_MAP_COMPARATOR_KEY);
  const entries = Array.from(map.entries());

  for (const [k, v] of entries) {
    if (k === SORTED_MAP_COMPARATOR_KEY) {
      continue;
    }

    const comparison = comparator(value, v);

    if (comparison < 0) {
      map.set(key, value);
      isSet = true;
    }

    map.delete(k);
    map.set(k, v);
  }

  /**
   * we just want to add this in the end
   */
  if (!isSet) {
    map.set(key, value);
  }

  map.delete(SORTED_MAP_COMPARATOR_KEY);
  map.set(SORTED_MAP_COMPARATOR_KEY, comparator);

  return map;
}

/**
 * declare function reduce<K, V, U>(
 *   map: SortedMap<K, V>,
 *   f: (acc: U, value: V, key: K) => U,
 *   initial: U
 * ): U
 **/
export const reduce = (map, f, initial) => [...map.keys()].reduce((acc, k) => f(acc, map.get(k), k), initial);
