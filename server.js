const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const passport = require("passport");

let port = process.env.PORT || 5000;

const test = require("./routes/api/test");

// body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB config
const db = require("./config/keys").mongoURI;

// connect to mongodb
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log(`connected to database successfully`);
  })
  .catch(err => console.log(err));

mongoose.connection;

// passport middleware
// app.use(passport.initialize());

// passport config
// require("./config/passport")(passport);

// use routes
app.use("/api/test", test);

// app.use(express.static(path.join(__dirname, "client", "build")));
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
// });

app.listen(port, () => {
  console.log(`server is up on port ${port}`);
});
