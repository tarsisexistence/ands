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
  const sortedPairs = pairs.sort((a, b) => comparator(a[1], b[1]));
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

  const keys = Object.keys(map);
  let isSet = false;

  for (const [k, v] in map) {
    if (k === SORTED_MAP_INTERNAL) {
      continue;
    }

    const comparator = map[SORTED_MAP_INTERNAL];
    // TODO: check
    const comparison = comparator(v, value);

    console.log(comparison);

    if (comparison !== 1) {
      map.set(key, value);
      map.set(k, v);
      isSet = true;
      break;
    }
  }

  if (!isSet) {
    map.set(key, value);
  }

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
