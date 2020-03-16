const router = require("express").Router();
const Workout = require("../models/workout");

router.get("/api/workouts", (req, res) => {
	Workout.find()
		.then(data => {
			res.json(data);
		})
		.catch(err => {
			res.json(err);
		});
});

router.post("/api/workouts", (req, res) => {
	Workout.create({})
		.then(data => res.json(data))
		.catch(err => {
			console.log(err);
			res.json(err);
		});

	router
		.put("api/workouts/:id", ({ body, params }, res) => {
			Workout.findByIDAndUpdate(
				params.id,
				{ $push: { exercises: body } },
				{ new: true, runValidators: true }
			);
		})
		.then(data => res.json(data))
		.catch(err => {
			console.log(err);
			res.json(err);
		});
});

module.exports = router;
