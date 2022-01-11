// module
const express = require(`express`);
require(`dotenv`).config();
const connect = require(`./database/connect`);

const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json({extended:true}));

connect.createConnection();

app.use('/api/v1/user', require('./routes/userRoutes'));
app.use('/api/v1/film', require('./routes/filmRoutes'));

// setup de la api al port 3000
app.listen(process.env.PORT || 3000, function () {
    console.log(`Example app listening on port 3000!`);
})
