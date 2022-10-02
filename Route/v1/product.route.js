const router = require('express').Router();
const productCollaction = require('../../Collaction/product.collaction');

router
	.route('/')
	.post(productCollaction.postProductCollaction)
	.get(productCollaction.getProductsCollaction);

router.route('/popular').get(productCollaction.getProductsPopularCollaction);
router.route('/filter').get(productCollaction.getProductsByFilterCollaction);

router
	.route('/:id')
	.get(productCollaction.getProductByIdCollaction)
	.patch(productCollaction.updateProductByIdCollaction);

module.exports = router;
