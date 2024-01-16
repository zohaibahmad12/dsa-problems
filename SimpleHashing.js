// Hashtable decides which data go in which bucket so when we have to retrieve or search
// a specific data then we dont have to iterate the whole array because we already know
// that the needed data is in which bucket

let array = [15, 44];

let hashTable = [];
let hashSize = 10


// storing array data in a hashtable using a hashing function:  
// (element%hashSize) most commonly used hash function. this will generate the hashcode(bucket where
// data will be stored)
for (let i = 0; i < array.length; i++) {

    let bucket = array[i] % hashSize
    hashTable[bucket] = array[i]

}



// Find 44 in hashtable
let toFind = 44;
let expectedBucket = toFind % hashSize

if (hashTable[expectedBucket]) {

    console.log("44 is in bucket ", expectedBucket);
    console.log(hashTable[expectedBucket]);
}
else {
    console.log("Not found");
}