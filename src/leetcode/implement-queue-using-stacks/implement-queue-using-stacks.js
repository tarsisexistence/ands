/**
 * Leetcode #232
 * Difficulty: Easy
 * https://leetcode.com/problems/implement-queue-using-stacks/
 */

const MyQueue = function () {
  this.stack1 = [];
  this.stack2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.stack1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  while (this.stack1.length !== 0) {
    this.stack2.push(this.stack1.pop());
  }

  const el = this.stack2.pop();

  while (this.stack2.length !== 0) {
    this.stack1.push(this.stack2.pop());
  }

  return el;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  // it's easier just to return `this.stack1.at(0)` but we're not allowed to
  while (this.stack1.length !== 0) {
    this.stack2.push(this.stack1.pop());
  }

  const el = this.stack2.pop();
  this.stack2.push(el);

  while (this.stack2.length !== 0) {
    this.stack1.push(this.stack2.pop());
  }

  return el;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.stack1.length === 0;
};
