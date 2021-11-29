/**
 * Leetcode #1656
 * Difficulty: Easy
 * https://leetcode.com/problems/design-an-ordered-stream/
 */
/**
 * @param {number} n
 */
const OrderedStream = function (n) {
  this.stream = new Array(n);
  this.point = 0;
};

/**
 * @param {number} idKey
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function (idKey, value) {
  const inserted = [];
  const id = idKey - 1;

  this.stream[id] = value;

  while (this.stream[this.point]) {
    inserted.push(this.stream[this.point]);
    this.point += 1;
  }

  return inserted;
};

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */
