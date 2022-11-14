const fs =require("fs");
const path = require("path");
const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question(`Enter your text ():` , function (content){
    rl.question(`Enter the name of the file :  ` , function(fileName){
        fs.writeFile(
            path.join(__dirname, `/${fileName}.txt`) ,
            content,
            function(err){
                if (err) {
                    console.log("ERROR 404");
                    return;
                }
            }
        )
        rl.close();
    })
})