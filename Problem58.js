

const romanToInt = (s) => {

    let roman = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }


    let sum = 0;
    let i = 0;
    while (i < s.length) {

        if ((s[i] == "I" && s[i + 1] == "V") || (s[i] == "I" && s[i + 1] == "X") || (s[i] == "X" && s[i + 1] == "L")
        || (s[i] == "X" && s[i + 1] == "C")|| (s[i] == "C" && s[i + 1] == "D")|| (s[i] == "C" && s[i + 1] == "M")) {
            let subtract=roman[s[i+1]]-roman[s[i]]
            sum=sum+subtract
            i = i + 2
        }
        else {
            sum = sum + roman[s[i]]
            i++
        }



    }

    console.log(sum);
}


romanToInt("XXIX")