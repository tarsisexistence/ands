/**
 * Leetcode #146
 * Difficulty: Medium
 * https://leetcode.com/problems/lru-cache/
 */
/**
 * @param {number} capacity
 */

export class LRUCache {
  cache = new Map();

  constructor(capacity) {
    this.capacity = capacity;
  }

  /**
   * @param {number} key
   * @return {number}
   */
  get = key => {
    if (!this.cache.has(key)) {
      return -1;
    }

    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);

    return value;
  };

  /**
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put = (key, value) => {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }

    this.cache.set(key, value);

    if (this.cache.size > this.capacity) {
      this.cache.delete(this.cache.keys().next().value);
    }
  };
}
