

const pairSum = (array, num) => {

    let hashmap = {}
    let pairArray = []

    for (let i = 0; i < array.length; i++) {
   
            if (hashmap[array[i]]) {
                hashmap[array[i]] = hashmap[array[i]] + 1
            }
            else {
                hashmap[array[i]] = 1
            }
        

    }


    


    for (const key in hashmap) {

        if (!hashmap[key] == 0) {

            let firstNum = Number(key)
            let toFind = num - firstNum

            if (hashmap[toFind]) {

                let pair = []
                pair.push(firstNum)
                pair.push(toFind)
                pairArray.push(pair)

                hashmap[firstNum] = hashmap[firstNum] - 1
                hashmap[toFind] = hashmap[toFind] - 1
            }

        }

    }


    console.log(pairArray);
}



let array = [1, 3, 3, 1, 2, 4, 1, 5, 7, 8, 7,0,2,-5,10]
pairSum(array, 5)