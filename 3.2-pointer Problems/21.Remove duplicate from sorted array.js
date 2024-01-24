const removeDuplicates=(array)=>{

    let j=1;

   for (let i = 1; i < array.length; i++) {

    if (array[i]!=array[i-1]) {
        array[j]=array[i]
        j++
    }
   }

   return j
}


let nums = [0,1,1,1,2,2,2,3]; 
let expectedNums=[]

let k = removeDuplicates(nums); 
console.log(k);