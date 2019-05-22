const express = require("express");
const bodyParser = require("body-parser");
const path = require("path")

const app = express();


const PORT = process.env.PORT || 8080;
//Sets up express to parse data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


//Server begins to listen
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
