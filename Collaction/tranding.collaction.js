const { getTrandingService } = require('../Service/tranding.service');

module.exports.getTranding = async (req, res) => {
	try {
		const result = await getTrandingService();
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
