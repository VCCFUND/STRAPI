'use strict';

/**
 * certificates service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::certificates.certificates');
