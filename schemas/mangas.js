import joi from "joi";
import joiOid from 'joi-oid';

export const MangaForm=joi.object({
    author_id: joiOid.objectId()
        .messages({
            'any.required': 'Author id required',
            'string.required': 'Author required'
        }),
    company_id: joiOid.objectId(),
    title: joi.string()
        .required()
        .messages({
            'any.required': 'Title required',
            'string.empty': 'Title required'
        }),
    cover_photo: joi.string()
        .uri()
        .messages({
            'any.required': 'Image required',
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
    category_id: joiOid.objectId()
        .required()
        .messages({
            'any.required': 'Category id required',
            'string.empty': 'Category id required'
        })
});