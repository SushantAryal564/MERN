// const express = require("express");
// const app = express();
// app.use(express.json());

// app.use((req, res, next) => {
//   console.log("We are currently in middleware");
//   next();
// });

// const PORT = process.env.PORT || 8000;
// console.log(PORT);
// app.listen(PORT, () => {
//   console.log(`Servers up and running in port ${PORT}`);
// });
// app.get("/", (req, res) => {
//   console.log("hit");
//   res.send("Hello from server.");
// });
// app.post("/", (req, res) => {
//   const { username, password } = req.body;
//   console.log(username);
//   console.log(password);
//   res.send("Post on the server");
// });
// app.post("/:id", (req, res) => {
//   const id = req.params.id;
//   console.log(id);
//   res.send("Params request");
// });
// app.delete("/delete", (req, res) => {
//   const { search, age, marriage } = req.query;
//   console.log(search, age, marriage);
//   console.log("Delete request");
//   res.send("Welcome to the internet");
// });

// 2nd topic
const express = require("express");
const app = express();
require("dotenv").config();
app.get("/home", (req, res) => {
  res.send("Home Route");
});
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`SERVER on: ${PORT}`));
