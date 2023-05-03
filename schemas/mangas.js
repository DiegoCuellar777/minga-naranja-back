import joi from "joi";
import joiOid from 'joi-oid';

export const MangaForm = joi.object({
    author_id: joiOid.objectId().required()
        .messages({
            'any.required': 'AUTHOR_ID_REQUIRED',
            'string.required': 'AUTHOR_REQUIRED'
        }),
    company_id: joiOid.objectId(),
    title: joi.string().required()
        .messages({
            'any.required': 'TITLE_REQUIRED',
            'string.empty': 'TITLE_REQUIRED'
        }),
    cover_photo: joi.string().uri().required()
        .messages({
            'any.required': 'IMG_REQUIRED',
            'string.empty': 'IMG_REQUIRED',
            'string.uri': 'INVALID_URL'
        }),
    description: joi.string().min(10).required()
        .messages({
            'any.required': 'DESCRIPTION_REQUIRED',
            'string.required': 'DESCRIPTION_REQUIRED',
            'string.min': 'DESCRIPTION_TOO_SHORT'
        }),
    category_id: joiOid.objectId().required()
        .messages({
            'any.required': 'CATEGORY_ID_REQUIRED',
            'string.empty': 'CATEGORY_REQUIRED'
        })
});