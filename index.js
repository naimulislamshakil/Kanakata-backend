const express = require('express');
const app = express();
const cors = require('cors');
const cookieSession = require('cookie-session');

const passport = require('passport');
const mongoose = require('mongoose');
const colors = require('colors');
const Port = process.env.PORT || 5000;
require('dotenv').config();

// import route file
const hellowRouter = require('./Route/v1/hellow.route');
const productRoute = require('./Route/v1/product.route');
const trandingRoute = require('./Route/v1/tranding.route');

// Add meddilware
app.use(cors());
app.use(express.json());
app.use(
	cookieSession({
		name: 'session',
		keys: ['Kanakata'],

		// Cookie Options
		maxAge: 24 * 60 * 60 * 1000, // 24 hours
	})
);
app.use(passport.initialize());
app.use(passport.session());

// mongoose connect with mongodb atlas
mongoose
	.connect(process.env.MONGOOSE)
	.then(() => {
		console.log('Mongoose Succesfully Connected.'.yellow.bold);
	})
	.catch((err) => {
		console.log(err);
	});

// Show "/" route
app.use('/', hellowRouter);
app.use('/api/v1/product', productRoute);
app.use('/api/v1/tranding', trandingRoute);

// Any Route Not Found
app.use('*', (req, res) => {
	const { baseUrl } = req;

	res.send(`<h1>${baseUrl} Not Found!</h1>`);
});

app.listen(Port, () => {
	console.log(`Inventory Management System Is Running: ${Port}`.red.bold);
});
