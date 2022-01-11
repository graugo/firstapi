module.exports.findById = async (data) => {
    let responseObj = { status: false };
    try {
        const doc = await data.model.findById(data._id, data.projection);
        responseObj = {
            result: doc,
            status: true
        };
    } catch (error) {
        responseObj.error = error;
        console.log(`ERROR-repository-findById: ${error}`);
    }
    return responseObj;
};

module.exports.selectAll = async (data) => {
    let responseObj = { status: false };
    console.log(data);
    try {
        // const docs = await data.model.find(data.findQuery, data.projection).skip(data.skip).limit(data.limit);
        const docs = await data.model.find(data.findQuery, data.projection, {skip: data.findQuery.skip, limit:data.findQuery.limit});
        responseObj = {
            result: docs,
            status: true
        };
    } catch (error) {
        responseObj.error = error;
        console.log(`ERROR-crudRepository-find: ${error}`);
    }
    return responseObj;

}