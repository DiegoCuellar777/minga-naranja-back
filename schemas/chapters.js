import joi from 'joi'

export const createChapter = joi.object({
    title: joi.string()
        .required(),
    cover_photo: joi.string()
        .uri()
        .required(),
    pages: joi.string()
        .uri()
        .required(),
    order: joi.number()
        .required()
}).messages({
    'any.required': '{#label} is required',
    'string.uri': '{#label} must be a valid URI'
});
