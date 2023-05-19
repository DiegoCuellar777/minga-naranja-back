//import createHttpError from "http-errors"
import Manga from '../../models/Manga.js'

// req, res son propiedades de un objeto, y next es una funcion
let createNewManga = async (req, res, next) => {
    console.log(req.body)
    req.body.role = 1
    try {
        let one = await Manga.create(req.body)    // se intenta crear un manga- 1 unico objeto
        await one.save()
        console.log(req.body.data)
        
        return res.status(201).json({
            manga: one,
            succes: true,
            timestamps: one.createdAt
        })
    } catch (error) {
        console.log(req.body.data)
        console.log(error)
        next(error)
    }
}

export default createNewManga

