var fs = require("fs")

console.log("\nAbiriendo Archivo")

var content = fs.readFile("el_quijote.txt","utf8", function(error,content){
    console.log(content)
})

console.log("\n Haciendo otra cosa")
console.log(process.uptime())