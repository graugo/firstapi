const status = require('../constants/status');
const filmService = require('../services/filmService');

module.exports = {
    findById : async (req, res) => {
        // missatge d'error per defecte
        const responseObj = { status: status.serverError, message: `Internal server error` };
        try {
            const filmId = req.params.id;
            // call al service d'usuaris
            const responseFromService = await filmService.findById(filmId);
            if (responseFromService.status) {
                if (responseFromService.result) {
                    responseObj.body = responseFromService.result;
                    responseObj.message = `Film fetched successfully`;
                    responseObj.status = status.ok;
                } else {
                    responseObj.message = `Film not found`;
                    responseObj.status = status.notFound;
                }
            }
        } catch (error) {
            responseObj.error = error;
            console.log(`ERROR-filmController-findById: ${error}`);
        }
        // return respObject
        return res.status(responseObj.status).send(responseObj);
    },
};