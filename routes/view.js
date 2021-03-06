const router = require("express").Router();
const path = require("path");

router.get("/exercise", function(req, res) {
	console.log("Exercise endpoint hit");
	res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "../public/index.js"));
});

router.get("/stats", function(req, res) {
	console.log("Stats endpoint hit");
	res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;
