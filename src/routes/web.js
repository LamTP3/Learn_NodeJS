import express from "express";
import homeController from "../controller/homeController";
import multer from "multer";
import path from "path";
var appRoot = require("app-root-path");
let router = express.Router();

// create where you want to store the file, and define the image name that will be stored
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, appRoot + "/src/public/image/");
  },

  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

// check the file type
const imageFilter = function (req, file, cb) {
  if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
    req.fileValidationError = "Only image files are allowed!";
    return cb(new Error("Only image files are allowed!"), false);
  }
  cb(null, true);
};

let upload = multer({ storage: storage, fileFilter: imageFilter });

let upload1 = multer({ storage: storage, fileFilter: imageFilter }).array(
  "multiple_images",
  3
);

const initWebRoute = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/detail/user/:userId", homeController.getDetailPage);
  router.post("/create-new-user", homeController.createNewUser);
  router.post("/delete-user", homeController.deleteUser);
  router.get("/edit-user/:id", homeController.getEditPage);
  router.post("/update-user", homeController.postUpdateUser);
  router.get("/upload", homeController.getUploadFilePage);
  router.post(
    "/upload-profile-pic",
    upload.single("profile_pic"),
    homeController.handleUploadFile
  );
  router.post(
    "/upload-multiple-images",
    (req, res, next) => {
      upload1(req, res, (err) => {
        if (
          err instanceof multer.MulterError &&
          err.code === "LIMIT_UNEXPECTED_FILE"
        ) {
          return res.send("Too many files to upload.");
        } else if (err) {
          return res.send(err);
        } else {
          // return res.send("Done");
          next();
        }
      });
    },
    homeController.handleUploadMultipleFile
  );
  //   router.post(
  //     "/upload-multiple-images",
  //     upload.array("multiple_images", 3),
  //     homeController.handleUploadMultipleFile
  //   );
  app.use("/", router);
};

module.exports = initWebRoute;
