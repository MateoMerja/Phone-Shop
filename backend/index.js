const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");
const app = express();
const contactRoute = require("./routes/contactRoute.js");
const itemRoute = require("./routes/itemRoute");
const path = require("path");
// Sintaksa
// app.method("path", (req,res)=>{

// })
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
    exposedHeaders: ["set-cookie"],
  })
);
app.use(
  session({
    secret: "This will be secret",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
  })
);
app.use(express.json({ limit: "1000mb", extended: true }));
app.use("/images", express.static(path.join(__dirname, "/images")))
// Lidhja me Databazen
mongoose
  .connect(
    "mongodb+srv://merjamateogit_db_user:mateomerja123@maindb.pbktxxt.mongodb.net/?retryWrites=true&w=majority&appName=MainDB"
  )
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB not connected " + err));

// Therritja
app.use(contactRoute);
app.use(itemRoute);
// Test
app.use("/", (req, res) => {
  res.send("Hello World");
});

// Server
app.listen(5000, () => {
  console.log("Server created");
});
