const express = require("express"); // common js
const configViewEngine = require("./config/viewEngine");
const initWebRouter = require("./routes/web");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 6969;
const hostname = process.env.HOST_NAME || "localhost";
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// config view engine
configViewEngine(app);

//test

// declare routes
app.use(`/v1`, initWebRouter);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
