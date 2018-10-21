let ar = process.argv;
ar.length !== 6 ? console.log("Invalid parameters") : isNaN(ar[2]) ? console.log("Invalid parameters") : ar[4] !== "to" ? console.log("Invalid parameters") :
    ar[3] !== "m" && ar[3] !== "cm" && ar[3] !== "mm" && ar[3] !== "g" && ar[3] !== "kg" ? console.log("Invalid parameters") :
        ar[5] !== "m" && ar[5] !== "cm" && ar[5] !== "mm" && ar[5] !== "g" && ar[5] !== "kg" ? console.log("Invalid parameters") :
            (ar[3] === "m" || ar[3] === "cm" || ar[3] === "mm") && (ar[5] === "g" || ar[5] === "kg") ? console.log("Invalid parameters") :
                (ar[5] === "m" || ar[5] === "cm" || ar[5] === "mm") && (ar[3] === "g" || ar[3] === "kg") ? console.log("Invalid parameters") :
                    ar[3] === "m" && ar[5] === "m" ? printErg(1) : ar[3] === "cm" && ar[5] === "cm" ? printErg(1) : ar[3] === "mm" && ar[5] === "mm" ? printErg(1) : ar[3] === "m" && ar[5] === "mm" ? printErg(1000) : ar[3] === "m" && ar[5] === "cm" ? printErg(100) : ar[3] === "cm" && ar[5] === "mm" ? printErg(10) : ar[3] === "cm" && ar[5] === "m" ? printErg(0.01) : ar[3] === "mm" && ar[5] === "cm" ? printErg(0.1) : ar[3] === "mm" && ar[5] === "m" ? printErg(0.001) : ar[3] === "kg" && ar[5] === "kg" ? printErg(1) : ar[3] === "g" && ar[5] === "g" ? printErg(1) : ar[3] === "kg" && ar[5] === "g" ? printErg(1000) : ar[3] === "g" && ar[5] === "kg" ? printErg(0.001) : console.log("Invalid parameters");
function printErg(mult) {
    console.log(parseFloat(ar[2]) + " " + ar[3] + " are " + parseFloat(ar[2]) * mult + " " + ar[5]);
}