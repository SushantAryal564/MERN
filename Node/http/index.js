const http = require("http");
const server = http.createServer((req,res)=>{
  res.end("Hello world")
})
server.listen(8000,"127.0.0.1");

