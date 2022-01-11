const status = require('../constants/status');
const Joi = require('@hapi/joi');

module.exports = {
    checkId: (req, res, next) => {
        if (req.params.id) {
            if (Number.isInteger(req.params.id)) {
                next();
            } else {
                const responseObj = {message: `ERROR: The param 'userId' must be an integer.`};
                res.status(status.badRequest).send(responseObj);
            }
        } else {
            const responseObj = {message: `ERROR: The param 'userId' doesn’t exist.`};
            res.status(status.badRequest).send(responseObj);
        }
    },
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