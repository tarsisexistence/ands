impl Solution {
    pub fn find_gcd(nums: Vec<i32>) -> i32 {
        fn gcd(a: i32, b: i32) -> i32 {
            match b == 0 {
                true => a,
                false => gcd(b, a % b),
            }
        }

        let largest = nums.iter().max().unwrap();
        let smallest = nums.iter().min().unwrap();

        gcd(*largest, *smallest)
    }
}
