console.log("testo")
const colors = require("colors/safe");
console.log(nextPrime(i=Number(process.argv[2]), n=Number(process.argv[3]), 1))
// let n = Number(process.argv[3])
// let c = 1
// let i = Number(process.argv[2])



function nextPrime(i , n, c){
    label: for (i ; i <= n; i++) {
        for (let j = 2; j < i; j++) {
            if(isNaN(i)) {
                return console.log(colors.red("error"))

            }
            else if (i % j == 0) {
                continue label
            }
        }
        if (c == 1){
            console.log(colors.green(i))
            c++

        }
        else if (c == 2){
            console.log(colors.yellow(i))
            c++

        }
        else if (c == 3){
            console.log(colors.red(i))
            c = 1

        }
    }
}


