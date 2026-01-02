const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");


dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth",require("./routes/authRoutes"));
app.use("/api/activity",require("./routes/activityRoutes"));

const {errorHandler} = require("./middleware/errorMiddleware");
app.use(errorHandler);

const port = process.env.PORT || 8080; // Azure provides process.env.PORT
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
