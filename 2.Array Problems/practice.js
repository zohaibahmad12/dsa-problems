let string="SampleNumber=3234 provider=Dr. M. Welby patient=John Smith Priority=High"
// let string="letters=A B Z T numbers=1 2 26 20 combine=true"
let splitArray=string.split(" ")
let resultString="";

for (let i = 0; i < splitArray.length; i++) {
    
    if (!splitArray[i].includes("=")) {
        splitArray[i-1]=splitArray[i-1]+" " + splitArray[i]
        splitArray.splice(i,1);
        i--
    }
    
}

for (let i = 0; i < splitArray.length; i++) {
    
    let equalSignIndex=splitArray[i].indexOf("=")
    let lengthOfString=splitArray[i].length
    resultString=resultString + `${equalSignIndex}=${lengthOfString-equalSignIndex-1} `
    
}

console.log(resultString);