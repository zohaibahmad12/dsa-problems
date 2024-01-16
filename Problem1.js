const mergeSortedArrays = (nums1, m, nums2, n) => {


    // Constraint Handling
    if (nums1.length != m + n || nums2.length != n || m < 0 || m > 200 || n < 0 || n > 200 || m + n < 1 || m + n > 200) {
        console.log("Invalid inputs");
        return
    }

    for (let i = 0; i < nums1.length; i++) {

        if (nums1[i] < -1 * (10 ** 9) || nums1[i] > 10 ** 9) {
            console.log("Array element is invalid");
            return
        }

    }
    for (let i = 0; i < nums2.length; i++) {

        if (nums2[i] < -1 * (10 ** 9) || nums2[i] > 10 ** 9) {
            console.log("Array element is invalid");
            return
        }

    }


    // Problem Solving


    let tempnums1 = [...nums1];
    let i = 0;
    let j = 0;
    let k = 0;


    while (i < m && j < n) {


        if (tempnums1[i] < nums2[j]) {
            nums1[k] = tempnums1[i];
            i++;
            k++;

        }
        else {
            nums1[k] = nums2[j];
            j++;
            k++;

        }

    }


    while (i < m) {


        nums1[k] = tempnums1[i];
        i++;
        k++;


    }

    while (j < n) {


        nums1[k] = nums2[j];
        j++;
        k++;


    }


}

let nums1 = [0]
let nums2 = [1]
mergeSortedArrays(nums1, 0, nums2, 1)

console.log(nums1);