use std::collections::HashSet;
use std::iter::FromIterator;

impl Solution {
    pub fn find_final_value(nums: Vec<i32>, mut original: i32) -> i32 {
        let set = HashSet::<i32>::from_iter(nums.iter().cloned());

        while set.contains(&original) {
            original *= 2;
        }

        // while nums.contains(&original) {
        //     original *= 2;
        // }

        original
    }
}
