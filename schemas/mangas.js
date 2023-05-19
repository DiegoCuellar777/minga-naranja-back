import joi from "joi-oid";

export const Mangas = joi.object({
    author_id: joi.objectId()
        .required() 
        .messages({
            'any.required': 'Author id required',
            'string.required': 'Author required'
        }),
    company_id: joi.objectId(),
    title: joi.string()
        .required()
        .messages({
            'any.required': 'Title required',
            'string.empty': 'Title required'
        }),
    cover_photo: joi.string()
        .uri()
        .required()
        .messages({
            'any.required': 'Url invalid',
            'string.empty': 'Image required',
            'string.uri': 'Url invalid'
        }),
    description: joi.string()
        .min(10)
        .required()
        .messages({
            'any.required': 'Description required',
            'string.required': 'Description required',
            'string.min': 'Description too short'
        }),
    category_id: joi.objectId()
        .required()
        .messages({
            'any.required': 'Category id required',
            'string.empty': 'Category id required'
        })
});