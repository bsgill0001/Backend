// mongo connection (First step)
const mongoose = require("mongoose");
const chalk = require("chalk");
const routes = require("./routes");
const cors = require("cors");
const express = require("express");
const backend = express();

backend.use(express.json());


// CORS (Second step) 2
backend.use(cors({
  origin: "*",
  methods: ["GET", "PUT", "PATCH", "POST", "DELETE"],
})
);




// routing 3
backend.use(routes);


// mongoose connect 1
mongoose.connect("mongodb+srv://mafiaiii0001s1:q2D2PfnCv9kielMP@my-clusterapp.0a0cb.mongodb.net/")
.then(() =>
    console.log("Mongo Connected")
  )
  .then(() => {
    const PORT = 5000;
    backend.listen(PORT, () => {
      console.log("Server started on port", (PORT));
    });
  })
  .catch((err) => console.log(err));


