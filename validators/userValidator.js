const { param } = require('express-validator');

const validateUser = [
    param('user')
        .notEmpty().withMessage('El nombre de usuario es obligatorio')
        .isAlphanumeric().withMessage('El nombre de usuario debe ser alfanumérico')
];

module.exports = {
    validateUser
};
