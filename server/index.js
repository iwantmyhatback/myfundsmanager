let express = require("express");
let morgan = require("morgan");
let bodyParser = require("body-parser");
let router = require("./router.js");
let app = express();
let port = 5555;

app.use(morgan("dev"));
app.use(bodyParser.json());

app.use("/", router);

app.listen(port, () => {
  console.log("*** Ayyyyy We're Listening On Port 5555 ***");
});
