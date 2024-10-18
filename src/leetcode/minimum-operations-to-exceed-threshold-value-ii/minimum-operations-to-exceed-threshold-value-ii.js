/**
 * Leetcode #3066
 * Difficulty: Medium
 * https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-ii/
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
export const minOperations = function (nums, k) {
  let output = 0;
  const heap = new MinHeap();

  for (let num of nums) {
    heap.insert(num);
  }

  while (heap.size() > 1 && heap.peek() < k) {
    const x = heap.extractMin();
    const y = heap.extractMin();

    const z = x * 2 + y;
    heap.insert(z);

    output += 1;
  }

  return output;
};

class MinHeap {
  constructor() {
    this.heap = [];
  }

  bubbleUp(index) {
    while (index > 0) {
      const parentIndex = this.parentIndex(index);

      if (this.heap[index] >= this.heap[parentIndex]) {
        break;
      }

      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  insert(val) {
    this.heap.push(val);
    this.bubbleUp(this.heap.length - 1);
  }

  bubbleDown(index) {
    const length = this.heap.length;

    while (true) {
      const leftIndex = this.leftChildIndex(index);
      const rightIndex = this.rightChildIndex(index);
      let smallestIndex = index;

      if (leftIndex < length && this.heap[leftIndex] < this.heap[smallestIndex]) {
        smallestIndex = leftIndex;
      }

      if (rightIndex < length && this.heap[rightIndex] < this.heap[smallestIndex]) {
        smallestIndex = rightIndex;
      }

      if (smallestIndex === index) {
        break;
      }

      this.swap(index, smallestIndex);
      index = smallestIndex;
    }
  }

  extractMin() {
    if (this.heap.length < 2) {
      return this.heap.pop() ?? null;
    }

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);
    return min;
  }

  peek() {
    if (this.size() === 0) {
      return null;
    }

    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }

  parentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  leftChildIndex(index) {
    return 2 * index + 1;
  }

  rightChildIndex(index) {
    return 2 * index + 2;
  }

  swap(i, j) {
    const temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }
}

// array approach: doesn't pass time constraints
// var minOperations = function(nums, k) {
//   nums.sort((a, b) => b - a);
//   let output = 0;
//   let invalid = nums.some(x => x < k);
//
//   while (nums.length >= 2 && invalid) {
//     invalid = false;
//     output += 1;
//     const x = nums.pop();
//     const y = nums[nums.length - 1];
//     const next = x * 2 + y;
//
//     if (next < k) {
//       invalid = true;
//     }
//
//     for (let i = nums.length - 2; i >= 0; i -= 1) {
//       if (nums[i] < k) {
//         invalid = true;
//       }
//
//       if (next > nums[i]) {
//         nums[i + 1] = nums[i];
//         nums[i] = next;
//       } else {
//         nums[i + 1] = next;
//         break;
//       }
//     }
//   }
//
//
//   return output;
// };
