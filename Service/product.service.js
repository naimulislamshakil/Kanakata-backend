const Product = require('../Model/product');

module.exports.postProductService = async (data) => {
	const result = await Product.create(data);
	return result;
};

module.exports.getProductsService = async (query) => {
	const { skip, limit } = query;

	const result = await Product.find({}).skip(skip).limit(limit).sort('-price');
	const count = await Product.find({}).count();
	const pageCount = Math.ceil(count / limit);
	return { result, pageCount };
};

module.exports.getProductsByFilterService = async (query) => {
	const { skip, limit, sort, filter } = query;
	console.log(filter);

	const result = await Product.find({ category: filter })
		.skip(skip)
		.limit(limit)
		.sort(sort);
	const count = await Product.find({}).count();
	const pageCount = Math.ceil(count / limit);
	return { result, pageCount };
};

module.exports.getProductByIdService = async (id) => {
	const result = await Product.findById(id);
	const update = await Product.updateOne(
		{ _id: id },
		{ $inc: { viewCount: 1 } }
	);
	return result;
};

module.exports.updateProductByIdService = async (id, data) => {
	// console.log(data);
	if (data) {
		const result = await Product.updateOne(
			{ _id: id },
			{ $set: data },
			{
				runValidators: true,
			}
		);
		return result;
	} else {
		const error = 'You not give me a valid data.';
	}
};

module.exports.getProductsPopulerService = async (query) => {
	const result = await Product.find({}).limit(8);

	return result;
};
