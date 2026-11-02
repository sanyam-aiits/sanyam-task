const express = require("express");
const dotenv = require("dotenv");
const connectionDB = require("./conifg/connectionDB");
dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require("cors")());

try {
  connectionDB();
} catch (error) {
  console.error("Error connecting to MongoDB:", error);
}

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/product", require("./routes/product.routes"));

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
