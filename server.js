const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://user1:12121212@cluster0.95zuh.mongodb.net/notesDB?retryWrites=true&w=majority"
);

app.use("/", require("./routes/noteRoute"));

app.listen(3001, () => {
  console.log("express server is running on port 3001");
});
