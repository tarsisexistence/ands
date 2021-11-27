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

// impl Solution {
//     pub fn count_bits(n: i32) -> Vec<i32> {
//         let n = (n + 1) as usize; // Thank you Leetcode for your terrible method signatures in Rust.
//         let mut count = vec![0; n];
//         for i in 1..n {
//             count[i] = if i % 2 == 0 {
//                 count[i / 2]
//             } else {
//                 count[i - 1] + 1
//             };
//         }
//         count
//     }
// }