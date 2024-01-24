// 283. Move Zeroes LeetCode
const moveZeroes = (array) => {

    let zeroPointer = 0;
    let numberPointer = 0;

    
    while (numberPointer<array.length) {
        
        if (array[numberPointer]!=0) {
            let temp=array[numberPointer]
            array[numberPointer]=array[zeroPointer]
            array[zeroPointer]=temp
            zeroPointer++
        }
        numberPointer++;
    }



    
}

let array = [1,3,0,4,7,0]
moveZeroes(array)
console.log(array);