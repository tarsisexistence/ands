export const insertIterator = function (prop) {
  return {
    [Symbol.iterator]: function () {
      const ref = this;
      ref.counter = -1;
      return {
        next: function () {
          ref.counter += 1;
          return ref.counter >= ref[prop].length ? { done: true } : { done: false, value: ref[prop][ref.counter] };
        }
      };
    }
  };
};

export const iterableGenerator = function* (items) {
  for (let i = 0; i < items.length; i += 1) {
    yield items[i];
  }
};

export const insertIterableGenerator = function (prop) {
  return {
    [Symbol.iterator]: function () {
      return iterableGenerator(this[prop]);
    }
  };
};
