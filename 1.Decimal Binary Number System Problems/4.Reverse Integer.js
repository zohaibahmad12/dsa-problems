
const reverseInteger = (num) => {

    let minRange = -1 * (2 ** 31);
    let maxRange = (2 ** 31) - 1
    let reverseNum = 0;

    while (num != 0) {


        let lastDigit = num % 10;  //return last digit

        if (reverseNum > (maxRange - lastDigit) / 10 || reverseNum < (minRange - lastDigit) / 10) { //simplified equation from the below line of code
            return 0;
        }

        reverseNum = (reverseNum * 10) + lastDigit;  //store digit with previous digit

        if (num < 0) {
            num = Math.ceil(num / 10)  //remove last digit
        }
        else {
            num = Math.floor(num / 10)  //remove last digit
        }


    }



    return reverseNum
}


console.log(reverseInteger(-123456789));