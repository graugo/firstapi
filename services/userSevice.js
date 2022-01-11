const crudRepository = require(`../database/Repository`);
const User = require(`../models/db/userModel`);
const mongoose = require(`mongoose`);

module.exports.findById = async (userId) => {
    const responseObj = { status: false };
    try {
        const data = {
            _id: mongoose.Types.ObjectId(userId),
            model: User,
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
module.exports.selectAll = async (queryParams) => {
    const responseObj = { status: false };
    try {
        const data = {
            findQuery: queryParams,
            model: User,
            projection: {}
        };
        // if (queryParams.skip && queryParams.limit) {
        //     data.skip = queryParams.skip;
        //     data.limit = queryParams.limit;
        // };
        console.log('data',data);
        console.log('params', queryParams);
        const responseFromRepository = await crudRepository.selectAll(data);
        if (responseFromRepository.status) {
            responseObj.result = responseFromRepository.result;
            responseObj.status = true;
        }
    } catch (error) {
        responseObj.error = error;
        console.log(`ERROR-userService-selectAll: ${error}`);
    }
    return responseObj;
};