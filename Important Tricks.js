//                  *************Trick 1***************
// Whenever we have to play with occurences of elements in an array. Always go with
// hashtable. Store the occurences of each element in hashtable and solve the problem.
// Such as:
//  Find unique in an unsorted array
// Find duplicate in an unsorted array. Find
//  Find element that occur exacly 2 time in an unsorted array
// Find element that occur n/2 time in an unsorted array
// See Question 9,10,13,20 to see how hashtbale solve these problems in efficient way

// If we have to solve these with sorted array then dont use hashtable approach
// because we have more easiest way to solve if sorted array is given
// See Question 11,12 to see how we solve problem without hashing



//                     ************Trick 2 *****************
// If we are given numbers one by one like 3 => 2 => 1 and we have to combine them in a single 
// number in the same sequence as 321  then we use below approach:
// ans=0
// for each coming digit =>  (ans*10)+digit

// if we have to combine digit in reverse format like  3 => 2 => 1  to  123 thenwe use same approach
// as stated below just change the formula for each coming digit as  (digit*10powi)+ans
// See question 1,2,3 for this




//                       ***************Trick 3****************
// if we are given an integer and we have to reverse an integer such as 321 to 123
// then we use the following approach
// while number !=0 {
    // digit=number%10         this will give you last digit of number in each iteration
    //ans=(ans*10)+digit       this will combine the digits
    // number/10         this will remove the last digit in each iteration
// }

// See question 4 for this





//                         *******************Trick 4*************************

// left binary shift, right binary shift are important
//  AND of an integer with 1 => 5 & 1  => (perform AND operation on 32 bit binary representation of 5 and 1
// and give result in integer) we can take AND of any 2 integers

// Similar for OR and NOT

// See question 1,2,3 for this


 
//                   **********************Trick 5*********************
// XOR operator is also very important. it works like AND OR NOT operations.
// XOR return 1 if both bits are different (0 and 1)  and return 0 if both bits are same (1 and 1 or 0 and 0)
// See question 14 for the use of XOR operator





//                      ***********************Trick 6********************
// 2 pointer approach See question 8(reverse array) and question 16 (intersection of sorted array)
// and question 18 (sort array of 0s and 1s)


//                          *********************Trick 7******************
// 3 pointer approach See question 19 (sort array of 0s 1s and 2s)



//                               *************** Trick 8 **************
// See Binary Search Problems Question 21 to 32




//                              *******************Trick 9****************
// If reversing the string make the same string as before then the string in palindrome
// See String Section for question