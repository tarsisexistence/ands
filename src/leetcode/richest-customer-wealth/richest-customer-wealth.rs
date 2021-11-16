impl Solution {
    pub fn maximum_wealth(accounts: Vec<Vec<i32>>) -> i32 {
        let mut max = 0;

        for innerVec in accounts {
            let sum = innerVec.iter().sum::<i32>();

            if sum > max {
                max = sum;
            }
        }

        max
    }
}

// pub fn maximum_wealth(accounts: Vec<Vec<i32>>) -> i32 {
//     accounts.into_iter().fold(0, |richest, v| {
//         std::cmp::max(richest, v.iter().sum())
//     })
// }

// pub fn maximum_wealth(accounts: Vec<Vec<i32>>) -> i32 {
//     accounts.iter().map(|ac| ac.iter().sum()).max().unwrap()
// }
