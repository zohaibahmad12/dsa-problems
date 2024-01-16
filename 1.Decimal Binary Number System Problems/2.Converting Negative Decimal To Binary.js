// The approach is to first ignore the negative sign and covnert to binary
// Then take 2's compliment (1's Compliment and then add 1)
// The resultant value is the binary of negative number
// Note: take first compliment with 32 bit number

const decimalToBinary = (num) => {

    let binaryConversion = [];
    let i = 0;

    while (num != 0) {

        let bit = num & 1;
        binaryConversion[i] = bit

        num = num >> 1
        i++;
    }


    i = 0;
    let j = binaryConversion.length - 1
    while (i<j) {

        let tempSwap = binaryConversion[i]
        binaryConversion[i] = binaryConversion[j]
        binaryConversion[j] = tempSwap
        i++;
        j--;

    }
    return binaryConversion


}


let num = -64;
let positiveBinaryConversion = decimalToBinary(-1 * num);




// Converting to 32 bit binary and taking 1's Complement:

let bit32Binary = [];
for (let i = 0; i < 32 - positiveBinaryConversion.length; i++) {

    bit32Binary[i] = 1;
}


let currentSize = bit32Binary.length
let k = 0;
for (let i = currentSize; i < 32; i++) {

    if (positiveBinaryConversion[k] == 1) {
        bit32Binary[i] = 0
    }
    else {
        bit32Binary[i] = 1
    }

    k++;

}

console.log(bit32Binary);


// Adding 1 to 1's Complement:
for (let i = 31; i >= 0; i--) {
    if (bit32Binary[i] == 0) {
        bit32Binary[i] = 1;
        break;
    }
    else{
        bit32Binary[i]=0
    }

}


console.log(bit32Binary);






