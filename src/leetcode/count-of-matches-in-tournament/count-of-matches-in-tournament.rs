impl Solution {
    pub fn number_of_matches(mut n: i32) -> i32 {
        let mut matches = 0;
        let mut temp: f64 = n as f64;

        loop {
            let value = temp / 2.0;

            if (value < 1.0) {
                break;
            }


            matches += value.floor() as i32;
            temp = value.ceil();
        }

        matches
    }
}