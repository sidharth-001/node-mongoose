const mongoose = require('mongoose');
const Dishes = require('./models/dishes');
const url = 'mongodb://localhost:27017/conFusion';
const connect = mongoose.connect(url);

connect.then((db) => {
	console.log("Connected to Server");

	var newDish = Dishes({name: 'Pizza',description:'onion and corn'});
	newDish.save()
		.then((dish) => {
			console.log(dish);
			return Dishes.find({}).exec(); //to execute the command
			})
			.then((dishes) => {
				console.log(Dishes);
				return Dishes.remove();
				})
				.then(() => {
					return mongoose.connection.close();
					})
					.catch((err) => {
						console.log(err);
						
					});
				});