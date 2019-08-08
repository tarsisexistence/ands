function cacheSort(input) {
    const cache = {};

    input.forEach(value => {
        cache[value] = value;
    });

    return Object.values(cache);
}
