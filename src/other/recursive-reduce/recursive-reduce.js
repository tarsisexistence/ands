export const recursiveReduce = (array, f, initial, currentIndex = 0) => {
  const previousValue = initial;

  if (currentIndex >= array.length) {
    return initial;
  }

  const currentValue = array[currentIndex];
  const nextValue = f(initial, currentValue, currentIndex, array);

  return recursiveReduce(array, f, nextValue, currentIndex + 1);
};
