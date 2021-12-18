impl Solution {
    pub fn count_good_rectangles(rectangles: Vec<Vec<i32>>) -> i32 {
        let mut count = 0;
        let mut max = 0;

        for rectangle in rectangles {
            let size = i32::min(rectangle[0], rectangle[1]);

            if size > max {
                max = size;
                count = 1;
            } else if size == max {
                count += 1;
            }
        }

        count
    }
}
