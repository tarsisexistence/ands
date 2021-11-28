impl Solution {
    pub fn max_depth(s: String) -> i32 {
        let mut currentDepth = 0;
        let mut maxDepth = 0;

        for c in s.chars() {
            match c {
                '(' => {
                    currentDepth += 1;

                    maxDepth = if currentDepth > maxDepth {
                        currentDepth
                    } else {
                        maxDepth
                    }
                },
                ')' => {
                    currentDepth -= 1;
                },
                _ => ()
            }
        }

        maxDepth
    }
}
