const http = require('http'), ar = process.argv;
ar.length !== 6 ? console.log("Invalid parameters") : isNaN(ar[2]) ? console.log("Invalid parameters") : ar[4] !== "to" ? console.log("Invalid parameters") : ar[3] === ar[5] ? printErg(1) : (ar[3] === "m" && ar[5] === "mm") || (ar[3] === "kg" && ar[5] === "g") ? printErg(1000) : ar[3] === "m" && ar[5] === "cm" ? printErg(100) : ar[3] === "cm" && ar[5] === "mm" ? printErg(10) : ar[3] === "cm" && ar[5] === "m" ? printErg(0.01) : ar[3] === "mm" && ar[5] === "cm" ? printErg(0.1) : (ar[3] === "mm" && ar[5] === "m") || (ar[3] === "g" && ar[5] === "kg") ? printErg(0.001) :
    http.get('http://api.wolframalpha.com/v2/query?input=' + ar[2] + '%20' + ar[3] + '%20to%20' + ar[5] + '&appid=VA22WR-5H4UER4XUE&includepodid=Result&format=plaintext', (resp) => {
        let data = '';
        resp.on('data', (chunk) => { data += chunk; });
        resp.on('end', () => { data.substr(data.search("<queryresult success=\'") + 22, 5) === "false" ? console.log("Invalid parameters") : console.log(parseFloat(ar[2]) + " " + ar[3] + " are " + data.substring((parseInt(data.search("<plaintext>")) + 11), data.search("</plaintext>"))); });
    });
function printErg(mult) {
    console.log(parseFloat(ar[2]) + " " + ar[3] + " are " + parseFloat(ar[2]) * mult + " " + ar[5]);
}//Please add an enter after every : at line two to read it properly