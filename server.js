const express = require("express");
const app = express();

const path = require("path");

app.use(express.static(path.join(__dirname, "/pub")));
app.get("/", (req, res) => {
  res.send("Homepage for DUMN");
});
//   // sending a string
//   //res.send('This should be the root route!')

//   //sending some HTML
//   res.send(example.html)
// })
app.listen(process.env.PORT || 3000, () => console.log("Server is running..."));
