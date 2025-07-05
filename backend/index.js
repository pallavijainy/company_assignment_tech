require("dotenv").config()
const express = require("express");
const cors = require("cors")
const connectDB = require("./utils/config.db");
const apiRouter = require("./routes/index.routes")
const app = express();
const port = process.env.PORT || 8080;
app.use(cors(
    {credentials:true,methods : ["GET", "POST", "PUT", "DELETE"] ,  origin:true , allowedHeaders: ["Content-Type", "Authorization"] }
));
connectDB();
app.use(express.json());
app.use("/api",apiRouter)

app.get("/",(req,res)=>{
    res.send("Hello world")
})

app.listen(port , ()=>{
    console.log(`Server is running on port ${port}`)
});