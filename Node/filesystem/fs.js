const fs = require('fs');
// const data = fs.writeFileSync("input.txt","utf-8","This is sync file");
fs.readFileSync("./input.txt",'utf-8',(err,data)=>{
  if(err) return console.error(err);
  console.log(data);
})