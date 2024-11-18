const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/itsm", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Failed toconnect to MongoDB", err);
  });

  app.use("/api/tickets", require("./routes/ticketRoutes"));

  const PORT = 5000;
  app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}/`);
  });