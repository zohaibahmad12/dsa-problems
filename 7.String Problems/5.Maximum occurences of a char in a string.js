// One approach is to store occurences in an array
// Second approach is to store in hashmap

const maxOccurence=(string)=>{

    let occurences=[]

    for (let i = 0; i < string.length; i++) {
        let index=(string[i].toUpperCase().charCodeAt(0))-65    //Computing index where we have to store frequency
    
        if (occurences[index]) {
            occurences[index]=occurences[index]+1
        }
        else{
            occurences[index]=1
        }
    }

    
    let maxIndex=0
    for (let i = 1; i < occurences.length; i++) {
        
        if (occurences[i]>occurences[maxIndex]) {
            maxIndex=i
        }      
    }

    return String.fromCharCode(maxIndex+65)


}

console.log(maxOccurence(['A','A','l','i','L']));



