import { Router } from "express"
let router = Router()

import read from "../controllers/companies/read.js"
import create from "../controllers/companies/create.js"

import validator from "../middlewares/validator.js"
import companyExistsCreate from "../middlewares/companyExistsCreate.js"
import passport from "../middlewares/passport.js"
import author_id from "../middlewares/author_id.js"

import { companyCreate } from "../schemas/companyCreate.js"

router.get("/", read)
router.post("/", passport.authenticate("jwt", { session: false }), author_id, validator(companyCreate), companyExistsCreate, create)

export default router

