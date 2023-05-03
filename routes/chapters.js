import { Router } from "express"
import read from "../controllers/chapters/read.js"
import create from "../controllers/chapters/create.js"
import {createChapter} from '../schemas/chapters.js'
import validator from "../middlewares/validator.js"

let router = Router()

router.get("/", read)

router.post("/chapter-form",validator(createChapter),create)

export default router
