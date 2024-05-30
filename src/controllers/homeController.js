const connection = require("../config/database");

const getHomePage = (req, res) => {
  // simple query
  let user = [];
  connection.query("SELECT * FROM Users u ", function (err, results, fields) {
    user = results;
    console.log(">>>>Result: ", results); // results contains rows returned by server
    console.log(">>>>Fields: ", fields); // fields contains extra meta data about results, if available
    console.log("Check user: ", user);
    return res.send(JSON.stringify(user));
  });
};

const getSamplePage = (req, res) => {
  return res.render("sample.ejs");
};
module.exports = {
  getHomePage,
  getSamplePage,
};
