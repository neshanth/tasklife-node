require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const { authRoutes } = require("./routes");
const { connectDB } = require("./config/database");
const User = require("./models/User");

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use("/api/v1/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const init = async () => {
  await connectDB();
  app.listen(port, () => console.log(`Server running on port ${port}`));
};

init();
