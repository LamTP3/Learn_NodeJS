const connection = require("../config/database");
const {
  getAllUsers,
  getUserById,
  editUser,
  deleteUser,
} = require("../services/CRUDService");

const getHomePage = async (req, res) => {
  let results = await getAllUsers();
  return res.render("home.ejs", { users: results });
};

const getSamplePage = (req, res) => {
  return res.render("sample.ejs");
};
const postCreateUser = async (req, res) => {
  let { email, name, city } = req.body;
  // connection.query(
  //   `INSERT  INTO Users (email,name,city)
  //   Values (?,?,?)`,
  //   [email, name, city],
  //   function (err, results) {
  //     console.log(results);
  //     return res.send("Created user successfully");
  //   }
  // );
  const [results, fields] = await connection.query(
    `INSERT  INTO Users (email,name,city)
    Values (?,?,?)`,
    [email, name, city]
  );
  console.log(results);
  return res.send("Created user successfully");
};

const getCreatePage = (req, res) => {
  return res.render("create.ejs");
};
const getUpdatePage = async (req, res) => {
  let id = req.params.id;
  let user = await getUserById(id);

  return res.render("edit.ejs", { user: user[0] });
};
const putEditUser = async (req, res) => {
  await editUser(req, res);
  return res.redirect("/v1");
};

const deleteUserData = async (req, res) => {
  let id = req.params.id;
  await deleteUser(id);
  return res.redirect("/v1");
};
module.exports = {
  getHomePage,
  getSamplePage,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  putEditUser,
  deleteUserData,
};
