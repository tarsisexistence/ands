impl Solution {
    pub fn largest_altitude(gain: Vec<i32>) -> i32 {
        let mut current = 0;

        gain.iter().fold(0, |max, alt| {
            current += alt;

            i32::max(max, current)
        })
    }
}