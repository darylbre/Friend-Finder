const express = require("express");
const bodyParser = require("body-parser");
const path = require("path")

const app = express();


const PORT = process.env.PORT || 8080;
//Sets up express to parse data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



//require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);


//Server begins to listen
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
