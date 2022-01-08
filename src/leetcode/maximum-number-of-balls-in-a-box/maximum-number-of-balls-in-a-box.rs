impl Solution {
    pub fn count_balls(low_limit: i32, high_limit: i32) -> i32 {
        let mut map = std::collections::HashMap::new();

        for idx in low_limit..high_limit + 1 {
            let mut sum = 0;

            for c in idx.to_string().chars() {
                sum += (c.to_string()).parse::<i32>().unwrap();
            }

            *map.entry(sum).or_insert(0) += 1;
        }

        *map
            .iter()
            .max_by(|a,b| a.1.cmp(&b.1))
            .map(|(entry)| entry.1)
            .unwrap()
    }
}