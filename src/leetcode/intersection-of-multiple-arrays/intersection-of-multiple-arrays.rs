use std::collections::HashSet;
use std::iter::FromIterator;

impl Solution {
    pub fn intersection(nums: Vec<Vec<i32>>) -> Vec<i32> {
        let mut set = HashSet::<i32>::from_iter(nums[0].iter().cloned());

        for i in 1..nums.len() {
            set = HashSet::<i32>::from_iter(
                nums[i]
                    .iter()
                    .filter(|num| set.contains(&num))
                    .cloned()
            );
        }

        let mut ans = Vec::from_iter(set);
        ans.sort();
        ans
    }
}
