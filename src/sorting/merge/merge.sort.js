/**
 * Merge sort algorithm
 * Complexity: O(N*log(N))
 */
export const sortByMerge = array => {
    if (array.length === 1) return array;

    const divideId = Math.floor(array.length / 2);
    const left = array.slice(0, divideId);
    const right = array.slice(divideId);

    return merge(
        sortByMerge(left),
        sortByMerge(right)
    );
};

function merge(left, right) {
    const sortedArray = [];
    let leftId = 0;
    let rightId = 0;

    while(leftId < left.length && rightId < right.length) {
        if (left[leftId] < right[rightId]) {
            sortedArray.push(left[leftId]);
            leftId += 1;
        } else {
            sortedArray.push(right[rightId]);
            rightId += 1;
        }
    }

    return sortedArray.concat(
        left.slice(leftId),
        right.slice(rightId)
    )
}
