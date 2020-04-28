/**
 * Leetcode # -
 * Difficulty: -
 * Leetcode challenge problem
 */
export class FirstUnique {
  heap = new Map();
  nums = {};

  /**
   * @param {number[]} nums
   */
  constructor(nums) {
    for (let i = 0; i < nums.length; i += 1) {
      this.add(nums[i]);
    }
  }

  /**
   * @return {number}
   */
  showFirstUnique = () => this.heap.keys().next().value || -1;

  /**
   * @param {number} value
   * @return {void}
   */
  add = value => {
    if (this.nums[value] === undefined) {
      this.heap.set(value, true);
      this.nums[value] = true;
    } else {
      this.heap.delete(value);
    }
  };
}

/**
 * Your FirstUnique object will be instantiated and called as such:
 * var obj = new FirstUnique(nums)
 * var param_1 = obj.showFirstUnique()
 * obj.add(value)
 */
