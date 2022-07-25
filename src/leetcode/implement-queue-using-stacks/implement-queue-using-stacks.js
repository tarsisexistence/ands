/**
 * Leetcode #232
 * Difficulty: Easy
 * https://leetcode.com/problems/implement-queue-using-stacks/
 */

const MyQueue = function () {
  this.queue = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.queue.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  return this.queue.shift();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  return this.queue[0];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.queue.length === 0;
};
