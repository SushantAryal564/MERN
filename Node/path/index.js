// const path = require("path");
// const dirpath = path.dirname("./path/index.txt");
// console.log(dirpath);
// const dirname = path.extname("./path/index.txt");
// console.log(dirname);
// const baseName = path.basename("./path/index.txt");
// console.log(baseName);
// pathjoin = path.join("./");
// console.log(__dirname);
const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req.url);
  if(req.url == "/"){
    res.write("Hello world sushant");
    res.end();
  }else if (req.url == "/about"){
    res.write("This is about page");
    res.end();
  }else{
    res.writeHead(404,{"content-type":"html/text"})
    res.write("Route not found");
    res.end();
  }
}).listen(8000,"127.0.0.1");

