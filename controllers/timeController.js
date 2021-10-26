const status = {
    ok: 200,
    notFound: 404,
};

module.exports = {
    mili: (req, res) => {
        const time = {time: Date.now()};
        res.status(status.ok).send(time);
    },
    date: (req, res) => {
        const d = new Date;
        const time = {time: d.toISOString().slice(0, 10)};
        res.status(status.ok).send(time);
    },
    hour: (req, res) => {
        const d = new Date;
        const time = {time: d.toTimeString().split(' ')[0]};
        res.status(status.ok).send(time);
    }
};