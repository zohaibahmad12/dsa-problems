// We have 2 arrays, sorted and unsorted we pick one element from sorted part and insert it in unsorted part


const insertionSort=(array)=>{


    for (let i = 1; i < array.length; i++) {
        
        let temp=array[i]

        for (let j = i-1; j >= 0; j--) {
            
            if (array[j]>array[j+1]) {
                array[j+1]=array[j]
                array[j]=temp
            }
            else{
                break
            }

            
        }
        
    }
}


let array=[7,5,4,1]
insertionSort(array)
console.log(array);