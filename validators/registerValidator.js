const { check, validationResult } = require("express-validator");

const validateRegister = () => {

    return[

        check('nombre').notEmpty().withMessage('El campo nombre esta vacio'),
        check('usuario').notEmpty().withMessage('El campo usuario esta vacio'),
        check('email').notEmpty().withMessage('El campo email está vacío').isEmail().withMessage('El email es incorrecto'),
        check('contraseña').notEmpty().withMessage('El campo contraseña esta vacio'),

        (req, res, next) => {
            const errors = validationResult(req);

            if(!errors.isEmpty()) {

                const checkError = errors.array().map(error => error.msg);

                res.status(400).json({

                    msj: checkError
                })

                return;
            }

            next();
        }
    ]
}

module.exports = validateRegister;