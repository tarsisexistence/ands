impl Solution {
    pub fn max_distance(colors: Vec<i32>) -> i32 {
        let mut max = 0;
        let len = colors.len();

        for (idx, color) in colors.iter().enumerate() {
            if color != &colors[0] {
                max = i32::max(max, idx as i32);
            }

            if color != &colors[len - 1] {
                max = i32::max(max, len as i32 - 1 - idx as i32);
            }
        }

        max
    }
}
