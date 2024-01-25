// Leetcode ==> 258.Add Digits
// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

const addDigits = (num) => {

    let sum = 0

    while (num != 0) {

        let lastDigit = num % 10
        sum = sum + lastDigit
        num = Math.floor(num / 10)

        if (num == 0 && sum > 9) {
            num = sum
            sum = 0
        }
    }

   return sum
}


addDigits(38)