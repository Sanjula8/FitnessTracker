const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

const db = require("./models");

app.use(morgan("dev"));

// Express Apps
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// DB Mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populatedb", {
	useNewUrlParser: true
});

// Adding Routes
require("./routes/api")(app);
require("./routes/view")(app);

// Listener
app.listen(PORT, () => {
	console.log(`App running on port ${PORT}!`);
});
