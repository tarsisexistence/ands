/**
 * Leetcode #108
 * Difficulty: Easy
 * https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
 */
import { TreeNode } from '../../utils/node';

export const sortedArrayToBST = (nums, start = 0, end = nums.length - 1) => {
  if (start > end) {
    return null;
  }

  const middle = Math.floor((end + start) / 2);

  const node = new TreeNode(
    nums[middle],
    sortedArrayToBST(nums, start, middle - 1),
    sortedArrayToBST(nums, middle + 1, end)
  );

  return node;
};
