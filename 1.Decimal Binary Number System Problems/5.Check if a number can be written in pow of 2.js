const isPowOf2 = (num) => {

    if (num==0) {
        return 0
    }
    while (num != 1) {

        if (num % 2 != 0) {
            return 0
        }
        num = Math.floor(num / 2)
    }

    return 1;

}

if (isPowOf2(0)) {
    console.log("Yes");
}
else {
    console.log("No");
}