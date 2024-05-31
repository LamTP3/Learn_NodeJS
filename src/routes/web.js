const router = require("express").Router();
const {
  getHomePage,
  getSamplePage,
  postCreateUser,
  getCreatePage,
} = require("../controllers/homeController");

router.get("/", getHomePage);
router.get("/sample", getSamplePage);
router.get("/create", getCreatePage);
router.post("/create-user", postCreateUser);

module.exports = router;
