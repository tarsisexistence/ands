impl Solution {
    pub fn get_concatenation(nums: Vec<i32>) -> Vec<i32> {
        let length = nums.len();
        let mut ans = vec![0; length * 2];

        for i in 0..length {
            println!("{}", i);
            res[i] = nums[i];
            res[i + length] = nums[i];
        }

        ans
    }
}

// other solutions

// impl Solution {
//     pub fn get_concatenation(nums: Vec<i32>) -> Vec<i32> {
//         return nums[..].repeat(2);
//     }
// }

// impl Solution {
//     pub fn get_concatenation(mut nums: Vec<i32>) -> Vec<i32> {
//         nums.extend(nums.clone());
//         nums
//     }
// }

