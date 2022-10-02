const productService = require('../Service/product.service');

module.exports.postProductCollaction = async (req, res) => {
	try {
		const result = await productService.postProductService(req.body);
		res.status(200).json({
			status: 'Successfully',
			message: 'Product Post Successfully.',
			data: result,
		});
	} catch (error) {
		res.status(200).json({
			status: 'Failed',
			message: 'Product Post not successfully.',
			error: error.message,
		});
	}
};

module.exports.getProductsCollaction = async (req, res) => {
	try {
		const { limit = 5, page = 1, sort } = req.query;
		const query = {};

		if (page) {
			const skip = (page - 1) * parseInt(limit);
			query.skip = skip;
			query.limit = parseInt(limit);
		}

		const result = await productService.getProductsService(query);
		res.status(200).json({
			status: 'Successfully',
			data: result,
		});
	} catch (error) {
		res.status(200).json({
			status: 'Failed',
			message: 'Product get not successfully.',
			error: error.message,
		});
	}
};

module.exports.getProductsByFilterCollaction = async (req, res) => {
	try {
		const { limit = 5, page = 1, sort, filter } = req.query;
		const query = {};
		console.log(filter);

		if (filter) {
			query.filter = filter;
		}

		if (page) {
			const skip = (page - 1) * parseInt(limit);
			query.skip = skip;
			query.limit = parseInt(limit);
		}

		if (sort) {
			sort;
			query.sort = split;
		}

		const result = await productService.getProductsByFilterService(query);
		res.status(200).json({
			status: 'Successfully',
			data: result,
		});
	} catch (error) {
		res.status(200).json({
			status: 'Failed',
			message: 'Product get not successfully.',
			error: error.message,
		});
	}
};

module.exports.getProductByIdCollaction = async (req, res) => {
	try {
		const { id } = req.params;
		const result = await productService.getProductByIdService(id);
		res.status(200).json({
			status: 'Successfully',
			data: result,
		});
	} catch (error) {
		res.status(200).json({
			status: 'Failed',
			message: 'Data get not successfully.',
			error: error.message,
		});
	}
};

module.exports.updateProductByIdCollaction = async (req, res) => {
	try {
		const { id } = req.params;

		const result = await productService.updateProductByIdService(id, req.body);
		res.status(200).json({
			status: 'Successfully',
			data: result,
		});
	} catch (error) {
		res.status(200).json({
			status: 'Failed',
			message: 'Data get not successfully.',
			error: error.message,
		});
	}
};

module.exports.getProductsPopularCollaction = async (req, res) => {
	try {
		const result = await productService.getProductsPopulerService();
		res.status(200).json({
			status: 'Successfully',
			data: result,
		});
	} catch (error) {
		res.status(200).json({
			status: 'Failed',
			message: 'Product get not successfully.',
			error: error.message,
		});
	}
};
