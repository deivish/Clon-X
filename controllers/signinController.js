const userData = require('../data/userData');

const signinUser = (request, response) => {
    const { user, password } = request.body; // Obtener datos del cuerpo de la solicitud
    const userInfo = userData.find(u => u.user === user && u.password === password);

    if (!userInfo) {
        return response.status(401).json({ message: "Usuario o contraseña incorrectos" });
    }

    response.json({ message: `Inicio de sesión exitoso para ${user}` });
};

module.exports = {
    signinUser
};
