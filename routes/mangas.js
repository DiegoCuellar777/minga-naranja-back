// Se definen los endpoints de los mangas
// y se exportan para poder utilizarlos en el enrutador PRINCIPAL
import { Router } from "express"
import read from "../controllers/mangas/get_mangas.js"
import create from "../controllers/mangas/create.js"
import getMangasFromAuthor from "../controllers/mangas/get_mangas_from_autor.js"
import passport from "passport"
import one from '../controllers/mangas/get_one.js'
import { Mangas } from "../schemas/mangas.js"
import validator from "../middlewares/validator.js"
import exists_title from '../middlewares/exists_title.js'

let router = Router()

router.get("/", passport.authenticate('jwt', { session: false }), read)
router.post('/', validator(Mangas), exists_title, create)
router.get('/:manga_id',one)

<<<<<<< HEAD
router.get("/authors/:author_id", passport.authenticate('jwt', {session:false}), getMangasFromAuthor);
=======
router.get("/authors/:author_id", passport.authenticate("jwt", { session: false }), getMangasFromAuthor);
>>>>>>> 8322c676e7d7f7e1583b5bb0174f0d26b8acfb4b

router.get("/mangas", (req, res, next) => res.status(201).json({
    succes: true,
    admins: []
}))

<<<<<<< HEAD
=======
router.get('/:manga_id', getOne)
>>>>>>> 8322c676e7d7f7e1583b5bb0174f0d26b8acfb4b

export default router
