const users = [
    {name: 'john'},
    {name: 'dave'},
    {name: 'lindt'},
]
const status = {
    ok: 200,
}

module.exports = {
    list: (req, res) => {
        //db petition
        res.status(status.ok).send(users);
    }, 

    profile: () => {

    },
}