import {sortByCache} from './cache.sort';

describe('[SORT] cache', () => {
    test('should sort array ', () => {
        expect(sortByCache([
            1, 3, 5, 4, 2
        ])).toEqual([
            1, 2, 3, 4, 5
        ]);
    });

    test('should return already sorted array without changes', () => {
        const array = [1, 2, 3, 4, 5];
        expect(sortByCache(array)).toEqual(array);
    });

    test('should return sorted array when array is sorted in reverse order', () => {
        expect(sortByCache([
            5, 4, 3, 2, 1
        ])).toEqual([
            1, 2, 3, 4, 5
        ]);
    });

    test('should return sorted array with repeated values', () => {
        expect(sortByCache([
            5, 4, 3, 7, 9, 4
        ])).toEqual([
            3, 4, 4, 5, 7, 9
        ])
    });
});
