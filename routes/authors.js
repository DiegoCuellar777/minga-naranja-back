import { Router } from "express"
let router = Router()

import read from "../controllers/authors/read.js"
import create from "../controllers/authors/create.js"

import validator from "../middlewares/validator.js"
import authorExistsCreate from "../middlewares/authorExistsCreate.js"
import passport from "../middlewares/passport.js"
import author_id from "../middlewares/author_id.js"

import { authorCreate } from "../schemas/authorsCreate.js"

router.get("/", read)
router.post("/",passport.authenticate("jwt", { session: false }),author_id, validator(authorCreate), authorExistsCreate, create)

export default router
