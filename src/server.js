import express from "express";
import configViewEngine from "../src/config/viewEngine";
import initWebRoute from "../src/routes/web";
import initAPIRoute from "../src/routes/api";

require("dotenv").config();
var morgan = require("morgan");

const app = express();
const port = process.env.PORT || 6969;
// two line code below, you can know it is middleware
app.use(morgan("combined"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//set up view engine
configViewEngine(app);

//init web route
initWebRoute(app);
initAPIRoute(app);
//handle 404 not found
app.use((req, res) => {
  return res.render("404.ejs");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
