const { check } = require('express-validator');

const tweetValidator = [
    check('user')
        .notEmpty().withMessage('El nombre de usuario es obligatorio')
        .isAlphanumeric().withMessage('El nombre de usuario debe ser alfanumérico'),
    check('mensaje')
        .notEmpty().withMessage('El mensaje no puede estar vacío')
        .isLength({ max: 280 }).withMessage('El mensaje no puede exceder los 280 caracteres')
];

module.exports = {
    tweetValidator
};
