const fs= require("fs");

// fs.writeFile("text.txt","what are you doing here so far from the home?",(err)=>{
//     if(err)throw err;
//     else console.log("file is saved");
// });

fs.readFile("text.txt","utf8",(err,data)=>{
    if(err) throw err;
    else console.log(data);

});