import {sortByMerge} from './merge.sort';

describe('[SORT] merge', () => {
    test('should sort array ', () => {
        expect(sortByMerge([
            1, 3, 5, 4, 2
        ])).toEqual([
            1, 2, 3, 4, 5
        ]);
    });

    test('should return already sorted array without changes', () => {
        const array = [1, 2, 3, 4, 5];
        expect(sortByMerge(array)).toEqual(array);
    });

    test('should return sorted array when array is sorted in reverse order', () => {
        expect(sortByMerge([
            5, 4, 3, 2, 1
        ])).toEqual([
            1, 2, 3, 4, 5
        ]);
    });

    test('should return sorted array with repeated values', () => {
        expect(sortByMerge([
            5, 4, 3, 7, 9, 4
        ])).toEqual([
            3, 4, 4, 5, 7, 9
        ])
    });
});
