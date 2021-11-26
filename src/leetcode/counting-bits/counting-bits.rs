impl Solution {
    pub fn count_bits(n: i32) -> Vec<i32> {
        let mut ans = Vec::<i32>::with_capacity((n + 1) as usize);

        for idx in 0..n + 1 {
            ans.push(idx.count_ones() as i32)
        }

        ans
    }
}

// impl Solution {
//     pub fn count_bits(n: i32) -> Vec<i32> {
//         (0..=n as usize).map(|x| x.count_ones() as i32).collect()
//     }
// }