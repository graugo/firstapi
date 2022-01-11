const crudRepository = require(`../database/Repository`);
const Film = require(`../models/db/filmModel`);
const mongoose = require(`mongoose`);

module.exports.findById = async (filmId) => {
    const responseObj = { status: false };
    try {
        const data = {
            _id: mongoose.Types.ObjectId(filmId),
            model: Film,
            projection: { __v: false }
        };
        const responseFromRepository = await crudRepository.findById(data);
        if (responseFromRepository.status) {
            responseObj.result = responseFromRepository.result;
            responseObj.status = true;
        }
    } catch (error) {
        responseObj.error = error;
        console.log(`ERROR-userService-findById: ${error}`);
    }
    return responseObj;
};