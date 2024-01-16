// 1,2,3 => 123     ans=0 ; ans=(ans*10)+digit
// 1,2,3 => 321   ans=0 ; ans=(digit*10poweri) + ans


// One method is to divide the number by 2 and record the reminder and repeat the same cycle
// Below is another method to convert decimal to binary:
// time complexity is O(logn)

const decimalToBinary = (num) => {

    let binaryConversion = 0;
    let i = 0;

    while (num != 0) {

        let bit = num & 1;
        binaryConversion = (bit * (10 ** i)) + binaryConversion

        num = num >> 1
        i++;
    }

    console.log(binaryConversion);


}

decimalToBinary(11)