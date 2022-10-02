const mongoose = require('mongoose');
const validator = require('validator');
const { ObjectId } = mongoose.Schema.Types;

const productSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			unique: [true, 'Please provide a valid unique name.'],
			minLength: [5, 'Name shout be at least 5 letter.'],
			maxLength: [100, 'Name is too large.'],
			trim: true,
		},
		description: {
			type: String,
			required: true,
		},
		unit: {
			type: String,
			required: true,
			enum: {
				values: ['kg', 'litter', 'pcs', 'bag'],
				message: "Unit value can't be {VALUE}, must be kg/litter/pcs/bag",
			},
		},
		imageUrls: {
			type: String,
			required: true,
		},
		category: {
			type: String,
			required: true,
		},
		brand: {
			type: String,
		},
		price: {
			type: Number,
			required: true,
			min: [0, "Product price can't be negative."],
		},

		status: {
			type: String,
			required: true,
			enum: {
				values: ['In-Stock', 'Out-Of-Stock'],
				message: "Status can't be {VALUE}.",
			},
			default: 'In-Stock',
		},
		viewCount: {
			type: Number,
			default: 0,
		},
	},
	{
		timestamps: true,
	}
);

// Create model
const Product = mongoose.model('Product', productSchema);
module.exports = Product;
