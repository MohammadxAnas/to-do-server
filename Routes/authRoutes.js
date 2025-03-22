const {Router} = require("express");
const { signupValidation, loginValidation, codeValidation } = require("../middleware/authvalidation");
const { signup, login, confirmEmail, removeAccount } = require("../controller/authcontroller");
const ensureAuthenticated = require("../middleware/auth");

const router = Router();

router.post("/login",loginValidation,login);
router.post("/signup",signupValidation,signup);
router.post("/verify",codeValidation,confirmEmail);
router.delete("/remove/:userId",ensureAuthenticated,removeAccount);

module.exports = router;