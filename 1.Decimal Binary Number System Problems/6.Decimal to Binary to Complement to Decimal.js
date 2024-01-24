// A decimal is given such as 5
// Convert this decimal to binary which is 101
// Then take complement of this binary become 010
// Then convert this complement to decimal again which is 2

const decimalToBinary = (num) => {

    let binaryConversion = [];
    let i = 0;

    while (num != 0) {
        let bit = num & 1;
        binaryConversion.push(bit)
        num = num >> 1
        i++;
    }

    return binaryConversion
}


const binaryToComplementToDecimal = (array) => {

    let decimalConversion = 0;
    let i = 0;

    for (let i = array.length-1; i >=0; i--) {
       
        if (array[i] == 0) {
            decimalConversion = decimalConversion + (2 ** i)
        }
    }

    return decimalConversion

}


const findComplement = (num) => {

    let binaryConversion = decimalToBinary(num);
    let decimalConversion = binaryToComplementToDecimal(binaryConversion)

    console.log(decimalConversion);
    return decimalConversion
}

findComplement(20161211)