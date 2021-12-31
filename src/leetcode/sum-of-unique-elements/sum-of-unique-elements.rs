impl Solution {
    pub fn sum_of_unique(nums: Vec<i32>) -> i32 {
        let mut map = std::collections::HashMap::new();

        for num in nums.iter() {
            *map.entry(num).or_insert(0) += 1;
        }

        nums
            .iter()
            .filter(|num| *map.get(num).unwrap() == 1)
            .sum::<i32>() as i32
    }
}
