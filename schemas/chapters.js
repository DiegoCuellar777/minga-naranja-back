import joi from 'joi'

export const createChapter = joi.object({
    title: joi.string()
        .required(),
    cover_photo: joi.string()
        .uri()
        .required(),
    pages: joi.string()
        .required(),
    order: joi.number()
        .required()
})