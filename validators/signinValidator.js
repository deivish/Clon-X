const { check, validationResult } = require('express-validator');

const validateSignin = () => {
    return [
        check('user').notEmpty().withMessage('El nombre de usuario es obligatorio'),
        check('password').notEmpty().withMessage('La contraseña es obligatoria'),

        (req, res, next) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            next();
        }
    ];
};

module.exports = validateSignin;
