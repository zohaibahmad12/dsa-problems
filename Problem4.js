
const removeDuplicates = (nums) => {


    let k = 0;
    for (let i = 0; i < nums.length; i++) {

      if (!(nums[i]==nums[k-1] && nums[i]==nums[k-2])) {
        nums[k]=nums[i]
        k++
        
      }

    }

  console.log(nums);
    return k;



}


removeDuplicates([2,3,3,3,3,4])