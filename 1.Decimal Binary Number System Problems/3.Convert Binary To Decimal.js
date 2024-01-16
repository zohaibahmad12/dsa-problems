// To convert binary to decimal the one and only approach we have is:
// 1101 = 2pow3 + 2pow2 + 2pow0 ====> Only take bits which are 1
// If the binary number is given in an array then we simple iterate the array
// and if bit is 1 then implement 2power and if bit is 0 then we ignore it

// But if the binary number is given in an integer variable instead of array then we get 
// digit from the back one by one and apply the power concept

const binaryToDecimal = (num) => {

    let decimalConversion = 0;
    let i = 0;

    while (num != 0) {

        let digit=num%10   //give the last digit

        if (digit==1) {
            decimalConversion=decimalConversion+ (2**i)
        }
        i++;
        num=Math.floor(num/10);  //remove the last digit
        console.log(num);
    }

    console.log(decimalConversion);


}


binaryToDecimal(101)