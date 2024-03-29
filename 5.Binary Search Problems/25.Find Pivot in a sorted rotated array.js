// The point where an sorted array is rotated is pivot point such as
//  [1,3,5,7,9] => [7,9,1,2,3] This Array is rotated sorted
// 7 8 9 1 2 3 4 5 7   pivot is 1 here
const pivot=(array)=>{

    let start=0;
    let end=array.length-1
    let mid=Math.floor(end/2)

    while (start<=end) {

        if (array[mid]>array[mid-1] && array[mid]>array[mid+1]) {
           return mid+1;
        }
        else if (array[mid]<array[0]) {
            end=mid-1
            mid=Math.floor((start+end)/2)
        }
        else if (array[mid]>=array[0]) {
            start=mid+1
            mid=Math.floor((start+end)/2)
        }
        
    }

    return -1
}


let array=[7,8,2,4,5]
console.log(pivot(array));
