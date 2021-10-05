const express = require(`express`);
const app = express();
const controller = require(`./controllers/firstController`)

app.get(`/`, controller.helloWorld)
app.listen(process.env.PORT || 3000, function () {
    console.log(`Example app listening on port 3000!`);
})
