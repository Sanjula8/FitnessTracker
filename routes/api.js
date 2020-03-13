const Workout = require("../models/workout");

module.exports -
	function(app) {
		app.get("/api/workouts", function(req, res) {
			Workout.find()
				.then(data => {
					res.json(data);
				})
				.catch(err => {
					res.json(err);
				});
		});

		app.post("/api/worouts", function(req, res) {
			Workout.create({})
				.then(data => res.json(data))
				.catch(err => {
					console.log(err);
					res.json(err);
				});

			app.put("api/workouts/:id", ({ body, params }, res) => {
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
	};
