
const router = require("express").Router();
const reviewController = require("../controller/review.controller");
const { verifyToken } = require("../middleware/authMiddleware");
const upload = require("../utils/multer");

router.post("/add" ,upload.single("image"), verifyToken, reviewController.addReview)
router.get("/reviews" ,verifyToken,reviewController.getAllReview)
router.get("/landing-reviews" ,reviewController.getAllReview)
router.get("/review/:id" ,verifyToken,reviewController.getReviewID)
router.put("/update/:id" ,verifyToken,reviewController.updateReview)
router.delete("/delete/:id" ,verifyToken,reviewController.deleteReview)

module.exports  = router;