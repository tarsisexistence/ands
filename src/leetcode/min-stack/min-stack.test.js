import { MinStack } from './min-stack';

describe('[Leetcode] fizzBuzz', () => {
  test('example #1', () => {
    const minStack = new MinStack();
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);
    expect(minStack.getMin()).toBe(-3);
    minStack.pop();
    expect(minStack.top()).toBe(0);
    expect(minStack.getMin()).toBe(-2);
  });

  test('should return default min infinity value', () => {
    const minStack = new MinStack();
    expect(minStack.getMin()).toBe(Infinity);
  });

  test('should return min infinity value', () => {
    const minStack = new MinStack();
    minStack.push(5);
    minStack.pop();
    expect(minStack.getMin()).toBe(Infinity);
  });
});
