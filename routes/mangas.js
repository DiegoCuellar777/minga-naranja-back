// Se definen los endpoints de los mangas
// y se exportan para poder utilizarlos en el enrutador PRINCIPAL
import { Router } from "express"
import read from "../controllers/mangas/read.js"
import create from "../controllers/mangas/create.js"
import passport from "passport"
import getOne from '../controllers/mangas/get_one.js'

import { MangaForm } from "../schemas/mangas.js"
import validator from "../middlewares/validator.js"

let router = Router()

router.get("/", passport.authenticate('jwt', {session:false}), read)
router.post('/', validator(MangaForm), create)


router.get('/', function(req,res,next) {
    res.send('respond with a resource')
})

router.get("/mangas",(req, res, next)=>res.status(201).json({
    succes:true,
    admins: []
}))

router.get('/:manga_id',getOne)

export default router
