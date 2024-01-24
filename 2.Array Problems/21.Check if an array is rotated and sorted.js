


const check=(array)=>{

    let reversePair=0
    for (let i = 0; i < array.length; i++) {
       
        if (array[i]>array[(i+1)%array.length]) { //compare the ith element with the next element in a circular array
            reversePair++;
        }      
    }

   return count<=1
}


let array=[3,7,1,4,2]
console.log(check(array));