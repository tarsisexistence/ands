/**
 * Leetcode #380
 * Difficulty: Medium
 * https://leetcode.com/problems/insert-delete-getrandom-o1/
 */
class RandomizedSet {
  values = new Map();
  indices = new Map();
  last = -1;

  /**
   * Inserts a value to the set. Returns true if the set did not already contain the specified element.
   * @param {number} val
   * @return {boolean}
   */
  insert = val => {
    if (this.values.has(val)) {
      return false;
    }

    this.last += 1;
    this.values.set(val, this.last);
    this.indices.set(this.last, val);

    return true;
  };

  /**
   * Removes a value from the set. Returns true if the set contained the specified element.
   * @param {number} val
   * @return {boolean}
   */
  remove = val => {
    if (!this.values.has(val)) {
      return false;
    }

    const valIndex = this.values.get(val);
    const lastVal = this.indices.get(this.last);
    this.values.set(lastVal, valIndex);
    this.values.delete(val);
    this.indices.set(valIndex, lastVal);
    this.indices.delete(this.last);
    this.last -= 1;
    return true;
  };

  /**
   * Get a random element from the set.
   * @return {number}
   */
  getRandom = () => {
    const randomId = Math.floor(Math.random() * this.values.size);
    return this.indices.get(randomId);
  };
}
