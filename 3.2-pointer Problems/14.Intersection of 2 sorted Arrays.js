

const intersection = (array1, array2) => {

    let i = 0
    let j = 0

    let intersection=[]
    while (i < array1.length && j < array2.length) {

        if (array1[i]==array2[j]) {
            intersection.push(array1[i])
            i++;
            j++;
        }
        else if (array1[i]>array2[j]) {
            j++;
        }
        else{
            i++
        }
    }

    return intersection
}

let array1=[5,8]
let array2=[1,3,5,7]

console.log(intersection(array1,array2));