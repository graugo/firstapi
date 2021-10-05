module.exports.helloWorld = function (req, res) {
    const alumnes = [`Jordi`, `Marc`, `Keen`, `Jordi`, `Xavi`, `Marcos`, `Marcos`, `Dani`, `Pau`, `David`, `Alba`, `Marc`];
    const total = alumnes.length;
    const responseObj = {'alumnes': alumnes, 'total': total};
    const responseStatus = 200;
    res.status(responseStatus).send(responseObj);
}