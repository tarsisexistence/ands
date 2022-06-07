impl Solution {
    pub fn count_pairs(mut nums: Vec<i32>, k: i32) -> i32 {
        let mut answer = 0;
        let len = nums.len();

        for i in 0..len - 1 {
            for j in i + 1..nums.len() {
                if 0 <= i && i <= j && nums[i] == nums[j] && i * j % k as usize == 0 {
                    answer += 1;
                }
            }
        }

        answer
    }
}
