const reviewModel = require("../model/review.model");
const fs = require("fs");
const path = require("path");


exports.addReview = async (req, res) => {
  try {
    const { stars, title, studentsWatched } = req.body;
    const imagePath = req.file ? req.file.path : null;

    if (!imagePath) {
      return res.status(400).json({ status: false, message: "Please upload an image." });
    }
    const review = await reviewModel.create({
      image: imagePath,
      stars,
      title,
      studentsWatched,
    });
    res.status(201).json({ status: true, message: "Review added successfully", review });
  } catch (error) {
    res.status(500).json({ status: false, message: "Internal Server Error", error });
  }
};

exports.getAllReview = async (req, res) => {
  try {
    const reviews = await reviewModel.find();
    res.status(200).json({ status: true, message: "Reviews fetched successfully", reviews });
  } catch (error) {
    res.status(500).json({ status: false, message: "Internal Server Error", error });
  }
};

exports.getReviewID = async (req, res) => {
  try {
    const review = await reviewModel.findById(req.params.id);
    if (!review) {
      return res.status(404).json({ status: false, message: "Review not found" });
    }
    res.status(200).json({ status: true, message: "Review fetched successfully", review });
  } catch (error) {
    res.status(500).json({ status: false, message: "Internal Server Error", error });
  }
};

exports.updateReview = async (req, res) => {
  try {
    console.log(req.body);
    const updated = await reviewModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) {
      return res.status(404).json({ status: false, message: "Review not found" });
    }
    res.status(200).json({ status: true, message: "Review updated successfully", updated });
  } catch (error) {
    res.status(500).json({ status: false, message: "Internal Server Error", error });
  }
};

exports.deleteReview = async (req, res) => {
  try {
    const review = await reviewModel.findById(req.params.id);
    if (!review) {
      return res.status(404).json({ status: false, message: "Review not found" });
    }
    const imagePath = path.join(__dirname, "../", review.image);
    fs.unlink(imagePath, (err) => {
      if (err) {
        console.log("Image file not found or already deleted", err.message);
      } else {
        console.log("Image file deleted successfully");
      }
    });
    await reviewModel.findByIdAndDelete(req.params.id);
     res.status(200).json({ status: true, message: "Review deleted successfully" });
  } catch (error) {
    res.status(500).json({ status: false, message: "Internal Server Error", error });
  }
};

