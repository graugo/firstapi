const users = [
    {id: '1', name: 'john'},
    {id: '2', name: 'dave'},
    {id: '3', name: 'lindt'},
]
const status = {
    ok: 200,
    notFound: 404,
}

module.exports = {
    list: (req, res) => {
        // despres de url (interrogant)
        // console.log(req.query.order);
        // en body(forms)
        // console.log(req.body)
        //db petition
        res.status(status.ok).send(users);
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
}