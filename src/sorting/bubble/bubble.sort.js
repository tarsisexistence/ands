/**
 * Bubble sort algorithm
 * Complexity: O(N^2)
 */
export const sortByBubble = input => {
  const array = [...input];
  let lastStable = array.length;
  let hasSwapped = false;

  while (lastStable > 0) {
    hasSwapped = false;

    for (let i = 0; i < lastStable; i += 1) {
      if (array[i] > array[i + 1]) {
        const temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;

        hasSwapped = true;
      }
    }

    if (!hasSwapped) {
      return array;
    }

    lastStable -= 1;
  }

  return array;
};

/**
 * Inverted version of
 * Bubble sort algorithm
 * Complexity: O(N^2)
 */
export const sortByInvertedBubble = input => {
  const array = [...input];
  let hasSwapped = false;

  for (let i = 0; i < array.length; i += 1) {
    hasSwapped = false;

    for (let j = array.length - 1; j > i; j -= 1) {
      if (array[j] < array[j - 1]) {
        const temp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = temp;

        hasSwapped = true;
      }
    }

    if (!hasSwapped) {
      return array;
    }
  }

  return array;
};
