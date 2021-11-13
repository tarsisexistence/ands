impl Solution {
    pub fn get_concatenation(nums: Vec<i32>) -> Vec<i32> {
        let length = nums.len();
        let mut res = vec![0; length * 2];

        for n in 0..length {
            println!("{}", n);
            res[n] = nums[n];
            res[n + length] = nums[n];
        }

        res
    }
}