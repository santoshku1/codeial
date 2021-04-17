const express = require("express");
const app = express();
const port = 8000;

//use express routes
app.use("/", require("./routes"));

app.listen(port, function (err) {
  if (err) {
    console.log(`err in server:${err}`);
  }
  console.log(`Server is running on port:${port}`);
});
