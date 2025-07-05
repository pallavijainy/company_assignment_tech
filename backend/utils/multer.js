const multer = require("multer");
const path = require("path");
const { db } = require("../model/user.model");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null,"uploads/");
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const name = file.originalname.replace(ext, "").replace(/\s+/g, "-");
    cb(null, `${name}-${Date.now()}${ext}`);
  },
});

const fileFilter =(req,file,cb)=>{
    const allowedTypes = /jpeg|jpg|png|gif/;
    const ext = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mime = allowedTypes.test(file.mimetype);
    if(ext && mime){
        cb(null,true);
    }else{
        cb("only image files are allowed!")
    }
}

const upload = multer({
    storage,
    fileFilter,
});

module.exports = upload;