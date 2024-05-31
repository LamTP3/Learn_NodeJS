const connection = require("../config/database");

const getHomePage = (req, res) => {
  return res.render("home.ejs");
};

const getSamplePage = (req, res) => {
  return res.render("sample.ejs");
};
const postCreateUser = (req, res) => {
  let { email, name, city } = req.body;
  connection.query(
    `INSERT  INTO Users (email,name,city) 
    Values (?,?,?)`,
    [email, name, city],
    function (err, results) {
      console.log(results);
      return res.send("Created user successfully");
    }
  );
};
module.exports = {
  getHomePage,
  getSamplePage,
  postCreateUser,
};
