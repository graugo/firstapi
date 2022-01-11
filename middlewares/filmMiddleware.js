const status = require('../constants/status');
const Joi = require('@hapi/joi');

module.exports = {
    validate: (schema, validation) => {
        return (req, res, next) => {
            let objToValidate = {};
            if (validation === `body`) objToValidate = req.body;
            else if (validation ===`query`) objToValidate = req.query;
            else if (validation ===`path`) objToValidate = req.params;
            const result = schema.validate(objToValidate);

            if (result.error) {
                console.log(result.error);
                const errDetails = result.error.details.map((error) => error.message);
                return res.status(status.badRequest).send(errDetails);
            } else {
                next();
            }
        };
    },
};