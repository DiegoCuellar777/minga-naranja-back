import joi from "joi-oid"

export const authorCreate = joi.object({
    name: joi.string().required().messages({
        'any.required': 'El nombre es requerido',
    }),
    last_name: joi.string().messages({
        'any.required': 'El apellido es requerido',
    }),
    city: joi.string().required().messages({
        'any.required': 'La ciudad es requerida',
    }),
    country: joi.string().required().messages({
        'any.required': 'El pais es requerido',
    }),
    photo: joi.string().uri().required().messages({
        'any.required': 'La url es requerida',
    }),
    
})
