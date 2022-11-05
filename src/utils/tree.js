export function createBinaryTree(arr) {
  if (arr.length === 0) {
    return null;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle + 1);

  return {
    val: arr[middle],
    left: createBinaryTree(left),
    right: createBinaryTree(right)
  };
}
