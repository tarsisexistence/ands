/**
 * Insertion sort algorithm
 * Complexity: O(N^2)
 */
export const sortByInsertion = array => {
    for (let i = 0; i < array.length; i++) {
        let value = array[i];
        let j = i - 1;

        for (; j >= 0 && array[j] > value; j -= 1) {
            array[j + 1] = array[j];
        }
        array[j + 1] = value;
    }

    return array;
};
