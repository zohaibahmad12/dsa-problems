
// One way is to use hashmap because we are working with occurences. another efficent 
// approach in this case is to use XOR (for same it return 0 for different it return 1)
// as i have all the elements occur twice only element occur once. So when i apply 
// XOR operation on all elements such as (2 XOR 3 XOR 1 XOR 2 XOR 1)
// here for similars 2 and 1 return will be 0 and then 0 XOR 1 will be 1
// XOR compare the binary bits of the numbers just like we did with & operation in decimal number system


const uniqueElement = (array) => {

    let element = 0;
    for (let i = 0; i < array.length; i++) {

        element = element ^ array[i]

    }

    return element
}

let array=[7,2,3,2,1,3,1]

console.log(uniqueElement(array));