const userData = require('../data/userData');


const listFollowed = (req, res) => {
    const { user } = req.params;
    const userInfo = userData.find(u => u.user === user);

    if (!userInfo) {
        return res.status(404).json({ message: "Usuario no encontrado" });
    }

    res.json(userInfo.followed);
};


const listFollowers = (req, res) => {
    const { user } = req.params;
    const userInfo = userData.find(u => u.user === user);

    if (!userInfo) {
        return res.status(404).json({ message: "Usuario no encontrado" });
    }

    res.json(userInfo.followers);
};


const listUsers = (req, res) => {
    res.json(userData);
};

module.exports = {
    listFollowed,
    listFollowers,
    listUsers
};
