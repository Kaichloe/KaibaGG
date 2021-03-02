const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;
const users = require("./routes/api/users");
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false })); // Request to Postman
app.use(bodyParser.json()); // Respond to JSON requests

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to mongoDB"))
  .catch(err => console.log(err));

app.use("/api/users", users);

app.get("/", (request, response) =>{
  console.log(response);
  response.send("Hello PRIME KAI!");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {console.log(`Listening on port ${port}`)});
