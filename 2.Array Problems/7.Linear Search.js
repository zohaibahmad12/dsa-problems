

const linearSearch = (array,element) => {

    let searchIndex=-1
    for (let i = 0; i < array.length; i++) {

        if (array[i]==element) {
            return i;
        }     
    }

    return searchIndex
}

let array=[2,7,7,5,6]
console.log(linearSearch(array,7));