"use strict";

const logger = require("../utils/logger");
const readingsCollection = require('../models/station-store.js');
const stationAnalytics = require('../utils/station-analytics.js');

const dashboard = {
  index(request, response) {
    logger.info("dashboard rendering");
    const latestConditionCode = stationAnalytics.latestConditionCode;
    const viewData = {
      title: "Weather Top Dashboard",
      playlists: readingsCollection,
      latestCondition: latestConditionCode
    };
    logger.info('about to render', readingsCollection,'latestCode',latestConditionCode);
    response.render("dashboard", viewData);
  },
};

module.exports = dashboard;
