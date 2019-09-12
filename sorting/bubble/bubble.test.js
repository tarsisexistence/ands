import {sortByBubble, sortByInvertedBubble} from './bubble.sort';

describe('[SORT] bubble', () => {
    describe('when normal', () => {
        test('should sort array ', () => {
            expect(sortByBubble([
                1, 3, 5, 4, 2
            ])).toEqual([
                1, 2, 3, 4, 5
            ]);
        });

        test('should return already sorted array without changes', () => {
            const array = [1, 2, 3, 4, 5];
            expect(sortByBubble(array)).toEqual(array);
        });

        test('should return sorted array when array is sorted in reverse order', () => {
            expect(sortByBubble([
                5, 4, 3, 2, 1
            ])).toEqual([
                1, 2, 3, 4, 5
            ]);
        });

        test('should return sorted array with repeated values', () => {
            expect(sortByBubble([
                5, 4, 3, 7, 9, 4
            ])).toEqual([
                3, 4, 4, 5, 7, 9
            ])
        });
    });


    describe('when inverted', () => {
        test('should sort array ', () => {
            expect(sortByInvertedBubble([
                1, 3, 5, 4, 2
            ])).toEqual([
                1, 2, 3, 4, 5
            ]);
        });

        test('should return already sorted array without changes', () => {
            const array = [1, 2, 3, 4, 5];
            expect(sortByInvertedBubble(array)).toEqual(array);
        });

        test('should return sorted array when array is sorted in reverse order', () => {
            expect(sortByInvertedBubble([
                5, 4, 3, 2, 1
            ])).toEqual([
                1, 2, 3, 4, 5
            ]);
        });

        test('should return sorted array with repeated values', () => {
            expect(sortByInvertedBubble([
                5, 4, 3, 7, 9, 4
            ])).toEqual([
                3, 4, 4, 5, 7, 9
            ])
        });
    })
});
