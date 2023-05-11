import { Router } from "express"
let router = Router()

import read from "../controllers/authors/read.js"
import getOneAuthor from "../controllers/authors/get_one.js"
import create from "../controllers/authors/create.js"

import validator from "../middlewares/validator.js"
import authorExistsCreate from "../middlewares/authorExistsCreate.js"
import passport from "../middlewares/passport.js"
import author_id from "../middlewares/author_id.js"

import { authorCreate } from "../schemas/authorsCreate.js"

router.get("/", read)
router.post("/", passport.authenticate("jwt", { session: false }), author_id, validator(authorCreate), authorExistsCreate, create)

router.get('/:id', passport.authenticate("jwt", { session: false }), getOneAuthor);

export default router
