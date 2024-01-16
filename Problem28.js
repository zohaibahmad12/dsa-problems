

const strStr = (haystack, needle) => {

    let k = 0;
    let i = 0;
    while (k < needle.length && i < haystack.length) {

        if (haystack[i] == needle[k]) {
            k++;
            i++
        }
        else {
            i=i-k+1
            k=0;
        }



    }

    if (k != needle.length) {
       return -1
    } else {
        return i - needle.length;
    }
}


strStr("sadbutsad", "sad")