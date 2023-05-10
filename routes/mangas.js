// Se definen los endpoints de los mangas
// y se exportan para poder utilizarlos en el enrutador PRINCIPAL
import { Router } from "express"
import read from "../controllers/mangas/get_mangas.js"
import create from "../controllers/mangas/create.js"
import getMangasFromAuthor from "../controllers/mangas/get_mangas_from_autor.js"
import passport from "passport"

import { Mangas } from "../schemas/mangas.js"
import validator from "../middlewares/validator.js"
import exists_title from '../middlewares/exists_title.js'

let router = Router()

router.get("/", passport.authenticate('jwt', {session:false}), read)
router.post('/', validator(Mangas), exists_title, create)

router.get("/:author_id", getMangasFromAuthor);

router.get("/mangas",(req, res, next)=>res.status(201).json({
    succes:true,
    admins: []
}))

export default router
