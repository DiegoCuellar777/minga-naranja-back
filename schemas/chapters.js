import joi from 'joi'

export const createChapter = joi.object({
    title: joi.string()
        .required()
        .messages({
            'any.required': 'PIPO',
            'string.empty': 'PIPO'
        }),
    cover_photo: joi.string()
        .uri()
        .required()
        .messages({
            'any.required': 'PIPO',
            'string.empty': 'PIPO',
            'string.uri': 'INVALID_URL'
        }),
    pages: joi.array()
        .items(
            joi.string()
                .uri())
        .required(),
    order: joi.number()
        .required()
}).messages({
    'any.required': '{#label} is required',
    'string.uri': '{#label} must be a valid URI'
});
