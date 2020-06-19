import { ListNodeNext } from '../../utils/node';

export const SORTED_MAP_INTERNAL = '__ds__';
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
  const sorted = pairs.sort((a, b) => comparator(a[1], b[1]));
  const map = new Map();

  for (let i = 0; i < sorted.length; i += 1) {
    const pair = sorted[i];
    map.set(pair[0], pair[1]);
  }

  map.set(SORTED_MAP_INTERNAL, {
    comparator
  });

  return map;
}

/**
 * declare function set<K, V>(map: SortedMap<K, V>, key: K, value: V): SortedMap<K, V>
 **/
export function set(map, key, value) {
  if (key === SORTED_MAP_INTERNAL) {
    return map;
  }

  const keys = Object.keys(map);
  let wasSet = false;

  for (let i = 0; i < keys.length; i += 1) {
    const k = keys[i];
    const v = map.get(k);

    if (k === SORTED_MAP_INTERNAL || wasSet) {
      map.set(k, v);
      continue;
    }

    const comparison = map[SORTED_MAP_INTERNAL].comparator(v[1], value);

    if (comparison !== 1) {
      map.set(key, value);
      map.set(k, v);
      wasSet = true;
    }
  }

  if (!wasSet) {
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
export const reduce = (map, f, initial) =>
  [...map.keys()].reduce((acc, k) => f(acc, map.get(k), k), initial);
