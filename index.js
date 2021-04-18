const express = require("express");
const app = express();
const port = 8000;
const expressLayout = require("express-ejs-layouts");
const db = require("./config/mongoose");

app.use(express.static("./assets"));

app.use(expressLayout);

//extract style and script from sub pages into layout
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

//use express routes
app.use("/", require("./routes"));

//set up view enjine
app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(port, function (err) {
  if (err) {
    console.log(`err in server:${err}`);
  }
  console.log(`Server is running on port:${port}`);
});
