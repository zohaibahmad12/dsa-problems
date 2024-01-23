// 1 scan means visit each element of array only once
// Use 3 pointer approach here to solve it in O(N) time complexity
const sort = (array) => {

    let i = 0;
    let j = array.length - 1;
    let mid = 0;

    while ( mid <= j) {

        if (array[mid] == 1) {
            mid++;
        }
        else if (array[mid] == 0) {
            let temp = array[mid]
            array[mid] = array[i]
            array[i] = temp;
            i++;
            mid++;
        }
        else if (array[mid] == 2) {
            let temp = array[mid]
            array[mid] = array[j]
            array[j] = temp;
            j--;
            
        }


    }

    return array

}


let array = [1,2,0]
console.log(sort(array));