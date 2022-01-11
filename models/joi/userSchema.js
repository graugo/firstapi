const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi);

module.exports.createUserSchema = Joi.object({
    mail: Joi.string().required(),
});

module.exports.userIdSchema = Joi.object({
    id: Joi.objectId().required(),
});

module.exports.selectAllSchema = Joi.object({
    active: Joi.boolean().optional(),
    skip: Joi.number().integer().optional(),
    limit: Joi.number().integer().optional(),
}).and('skip', 'limit');// if skip exists => limit must exist