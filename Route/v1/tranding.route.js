const { getTranding } = require('../../Collaction/tranding.collaction');

const route = require('express').Router();
route.route('/').get(getTranding);
module.exports = route;
