impl Solution {
    pub fn decode(encoded: Vec<i32>, first: i32) -> Vec<i32> {
        let mut ans = vec![first];

        for (i, &value) in encoded.iter().enumerate() {
            let idx: usize = i;
            ans.push(encoded[i] ^ ans[i]);
        }

        ans
    }
}

// impl Solution {
//     pub fn decode(encoded: Vec<i32>, first: i32) -> Vec<i32> {
//         std::iter::once(&first)
//             .chain(encoded.iter())
//             .scan(0, |xored, &x| {
//                 *xored ^= x;
//                 Some(*xored)
//             })
//             .collect::<Vec<i32>>()
//     }
// }