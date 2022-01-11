const status = require('../constants/status');
const userService = require('../services/userSevice');

module.exports = {
    findById : async (req, res) => {
        // missatge d'error per defecte
        const responseObj = { status: status.serverError, message: `Internal server error` };
        try {
            const userId = req.params.id;
            // call al service d'usuaris
            const responseFromService = await userService.findById(userId);
            if (responseFromService.status) {
                if (responseFromService.result) {
                    responseObj.body = responseFromService.result;
                    responseObj.message = `User fetched successfully`;
                    responseObj.status = status.ok;
                } else {
                    responseObj.message = `User not found`;
                    responseObj.status = status.notFound;
                }
            }
        } catch (error) {
            responseObj.error = error;
            console.log(`ERROR-userController-findById: ${error}`);
        }
        // return respObject
        return res.status(responseObj.status).send(responseObj);
    },
    selectAll: async (req, res) => {
        const responseObj = { status: status.serverError, message: `Internal server error` };
        try {
            const queryParams = {};
            if (req.query.active) {
                queryParams.active = req.query.active;
            }
            if (req.query.skip) queryParams.skip = +req.query.skip;
            if (req.query.limit) queryParams.limit = +req.query.limit;
            const responseFromService = await userService.selectAll(queryParams);
            if (responseFromService.status) {
                responseObj.body = responseFromService.result;
                responseObj.message = `Users fetched successfully`;
                responseObj.status = status.ok;
            }
        } catch(error) {
            responseObj.error = error;
            console.log(`ERROR-userController-selectAll: ${error}`);
        }
        return res.status(responseObj.status).send(responseObj);
    }, 

    profile: (req, res) => {
        // a dins de la url(parametres)
        // console.log(req.params.id);
        const user = users.find((user) => user.id === req.params.id);
        if (user) {
            res.status(status.ok).send(user);
        } else {
            const msg = {error: "User not found"}
            res.status(status.notFound).send(msg);
        }
    },
    create : (req, res) => {
        const newUser = {
            id: users.length + 1,
            name: req.body.name,
            job: req.body.job,
            birthday: req.body.birthday,
            username: req.body.username,
            mail: req.body.mail,
            password: req.body.password,
            rep_password: req.body.rep_password,
        };
        users.push(newUser);
        res.status(status.created).send(users);
    },
}