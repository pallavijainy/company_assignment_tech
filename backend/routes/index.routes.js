const router = require("express").Router();
const userRouter = require("../routes/user.routes");
const reviewRouter = require("../routes/review.routes");

router.use("/user",userRouter);
router.use("/review",reviewRouter);

module.exports = router;