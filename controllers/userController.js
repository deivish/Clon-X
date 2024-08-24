const userData = require('../data/userData');

// Obtener la lista de usuarios que sigue un usuario específico
const listFollowed = (req, res) => {
    const { user } = req.params;
    const userInfo = userData.find(u => u.user === user);

    if (!userInfo) {
        return res.status(404).json({ message: "Usuario no encontrado" });
    }

    res.json(userInfo.followed);
};

// Obtener la lista de seguidores de un usuario específico
const listFollowers = (req, res) => {
    const { user } = req.params;
    const userInfo = userData.find(u => u.user === user);

    if (!userInfo) {
        return res.status(404).json({ message: "Usuario no encontrado" });
    }

    res.json(userInfo.followers);
};

// Obtener la información de todos los usuarios registrados
const listUsers = (req, res) => {
    res.json(userData);
};

module.exports = {
    listFollowed,
    listFollowers,
    listUsers
};
