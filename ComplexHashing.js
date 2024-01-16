// sometimes there is a situation that more than one data element
// are going in same bucket which cause collision. to avoid this
// we have a data structure such as array at each bucket
let array=[15,45,21,17,25,33,41,33,75,77];

let hashTable=[];
let hashSize=10

for (let i = 0; i < hashSize; i++) {
   hashTable[i]=[] 
}


// storing array data in a hashtable using a hashing technique  (element%hashSize)
for (let i = 0; i < array.length; i++) {
    
    let bucket=array[i]%hashSize
   
    hashTable[bucket].push(array[i])
    
}


// Find 45 in hashtable
let toFind=77;
let expectedBucket=toFind%hashSize
let found=false
for (let i = 0; i < hashTable[expectedBucket].length; i++) {
   
    if (hashTable[expectedBucket][i]==toFind) {
        found=true
        break
    }
    
}

if (found) {
    console.log(toFind + " is in bucket # " + expectedBucket);
    console.log(hashTable[expectedBucket]);
}
else{
    console.log("Not Found");
}
