/**
 * Leetcode #706
 * Difficulty: Easy
 * https://leetcode.com/problems/design-hashmap/
 */
export class MyHashMap {
  /**
   * Initialize your data structure here.
   */
  storage = [];

  /**
   * @param {number} key
   * @return {number}
   */
  hash = key => key;

  /**
   * value will always be non-negative.
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put = (key, value) => {
    const address = this.hash(key);
    this.storage[address] = value;
  };

  /**
   * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
   * @param {number} key
   * @return {number}
   */
  get = key => {
    const address = this.hash(key);
    const value = this.storage[address];
    return value >= 0 ? value : -1;
  };

  /**
   * Removes the mapping of the specified value key if this map contains a mapping for the key
   * @param {number} key
   * @return {void}
   */
  remove = key => {
    const address = this.hash(key);
    this.storage[address] = undefined;
  };
}
