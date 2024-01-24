//       2 6 9
//       4 7 1
// Ans=  7 4 0

// This is how we have to sum arrays


const sumArrays = (array1, array2) => {

    let array3 = []
    let i = array1.length - 1
    let j = array2.length - 1
    let carry = 0
    let value = 0
    while (i >= 0 && j >= 0) {

        let sum = array1[i] + array2[j] + carry
        value = sum % 10
        carry = Math.floor(sum / 10)
        array3[i]=value
        i--
        j--
    }

    while (i >= 0) {
        let sum = array1[i] + carry
        value = sum % 10
        carry = Math.floor(sum / 10)
        array3[i]=value
        i--
    }

    while (j >= 0) {
        let sum = array2[j] + carry
        value = sum % 10
        carry = Math.floor(sum / 10)
        array3[j]=value
        j--
    }


    if (carry != 0) {
        array3.splice(0, 0, carry)
    }
    console.log(array3);
}

let array1 = [1,1]
let array2 = []
sumArrays(array1, array2)