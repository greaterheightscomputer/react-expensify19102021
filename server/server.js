// //basic express server set-up
// const path = require("path"); //is a built-in labrary
// const express = require("express"); //importing express

// const app = express(); //creating new instance of express

// const publicPath = path.join(__dirname, "..", "public");//serve-up public folder where you have bundle.js and styles.css files
// app.use(express.static(publicPath));

// //startup the server
// app.listen(3000, () => {
//   console.log("Server is up!");
// });

const path = require("path");
const express = require("express");

const app = express();
const publicPath = path.join(__dirname, "..", "public");
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(port, () => {
  console.log("Server is up!");
});
