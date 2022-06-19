export const recursiveReduce = (array, callback, previousValue, currentIndex = 0) => {
  if (currentIndex >= array.length) {
    return previousValue;
  }

  const currentValue = array[currentIndex];
  const nextValue = callback(previousValue, currentValue, currentIndex, array);

  return recursiveReduce(array, callback, nextValue, currentIndex + 1);
};
