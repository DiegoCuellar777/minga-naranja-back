//import createHttpError from "http-errors"
import Manga from '../../models/Manga.js'

// req, res son propiedades de un objeto, y next es una funcion
let create = async(req, res, next) => {
    try {
        let one = await Manga.create(req.body)    // se intenta crear un manga- 1 unico objeto
        await one.save()
        return res.status(201).json({
            id: one._id,
            timestamps: one.createdAt
        })
    } catch (error) {
        console.log(error)
        next(error)
    }
}

export default create 

