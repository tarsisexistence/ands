impl Solution {
    pub fn square_is_white(coordinates: String) -> bool {
        let letter = coordinates.as_bytes()[0];
        let isLetterEven = letter % 2 == 0;

        let num = coordinates.chars().nth(1).unwrap().to_digit(10).unwrap();
        let isNumEven = num % 2 == 0;

        (isLetterEven && !isNumEven) || (!isLetterEven && isNumEven)
    }
}