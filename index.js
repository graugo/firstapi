// module
const express = require(`express`);
const app = express();
require(`dotenv`)
// controllers
const controller = require(`./controllers/firstController`);
// get request through controller
app.get(`/`, controller.helloWorld)
// routes
// acces a través de localhost:3000/api/v1/user/[ruta establerta a fitxer]
app.use('/api/v1/user', require('./routes/userRoutes'));
// setup de la api al port 3000
app.listen(process.env.PORT || 3000, function () {
    console.log(`Example app listening on port 3000!`);
})
