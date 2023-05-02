import { Router } from "express"
import read from "../controllers/authors/read.js"
import create from "../controllers/authors/create.js"
let router = Router()
import validator from "../middlewares/validator.js"
import { authorCreate } from "../schemas/authors.js"

router.get("/", read)
router.post("/", validator(authorCreate), create)

export default router
