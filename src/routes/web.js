const router = require("express").Router();
const {
  getHomePage,
  getSamplePage,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  putEditUser,
} = require("../controllers/homeController");

router.get("/", getHomePage);
router.get("/sample", getSamplePage);
router.get("/create", getCreatePage);
router.get("/update/:id", getUpdatePage);
router.post("/create-user", postCreateUser);
router.post("/edit-user", putEditUser);

module.exports = router;
