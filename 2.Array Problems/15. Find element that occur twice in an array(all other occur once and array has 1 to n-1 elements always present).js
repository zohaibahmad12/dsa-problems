
// 1 to n-1 elements are always present in the array
// if array size is 4 then 1,2,3 are always present in array and the duplicated element is either 1 or 2 or 3

const duplicateElement=(array)=>{

    let arraySum=0;
    let elementSum=0;

    for (let i = 0; i < array.length; i++) {
        elementSum=elementSum+i;
        arraySum=arraySum+array[i]
        
    }

    return arraySum-elementSum
}

let array=[1,4,3,2,5,3]
console.log(duplicateElement(array));