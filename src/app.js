const express = require("express");
const app = express();

app.use("/test", (req, res) => {
  res.send("hello from test");
});
app.use("/hello", (req, res) => {
  res.send("hello from hello world");
});
app.use("/", (req, res) => {
  res.send("hello from dashboard");
});
app.listen(7777, () => {
  console.log("server is listing on port 7777");
});
