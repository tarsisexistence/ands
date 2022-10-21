export const reposition = (original, indices) => {
  const len = original.length;
  const map = new Map();

  for (let i = 0; i < len; i += 1) {
    map.set(indices[i], original[i]);
  }

  for (let i = 0; i < len; i += 1) {
    original[i] = map.get(i);
  }
};
