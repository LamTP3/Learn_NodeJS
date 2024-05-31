const connection = require("../config/database");
const getAllUsers = async () => {
  let [results, fields] = await connection.query("SELECT * FROM Users");

  return results;
};

const getUserById = async (id) => {
  let [results, fields] = await connection.query(
    "SELECT * FROM Users WHERE id = ?",
    [id]
  );
  return results;
};

const editUser = async (req, res) => {
  let { id, email, name, city } = req.body;
  let [results, fields] = await connection.query(
    "UPDATE Users SET email = ?, name = ?, city = ? WHERE id = ?",
    [email, name, city, id]
  );
  return results;
};

module.exports = {
  getAllUsers,
  getUserById,
  editUser,
};
