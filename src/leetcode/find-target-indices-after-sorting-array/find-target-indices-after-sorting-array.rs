impl Solution {
    pub fn target_indices(nums: Vec<i32>, target: i32) -> Vec<i32> {
        let mut offset: i32 = 0;
        let mut targets = 0;

        for num in nums {
            if num == target {
                targets += 1;
            } else if num < target {
                offset += 1;
            }
        }

        (offset..offset + targets).collect()
    }
}