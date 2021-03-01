const express = require("express");
const app = express();

app.get("/", (request, response) =>{
  response.send("Hello World!");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {console.log(`Listening on port ${port}`)});

// mongodb+srv://kaiba:<password>@kaibagg.f4q2y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority