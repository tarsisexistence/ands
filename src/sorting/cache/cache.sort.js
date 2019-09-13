export const sortByCache = input => {
    const cache = {};

    input.forEach(value => {
        cache[value] = cache[value] ? cache[value] + 1 : 1;
    });

    return Object.keys(cache).reduce((sortedArray, value) => {
        for (let i = 0; i < cache[value]; i += 1) {
            sortedArray.push(Number(value));
        }

        return sortedArray;
    }, []);
};
