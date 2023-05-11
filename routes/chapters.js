import { Router } from "express"
import read from "../controllers/chapters/read.js"
import create from "../controllers/chapters/create.js"
import {createChapter} from '../schemas/chapters.js'
import authorizedRole from "../middlewares/authorizedRole.js"
import validator from "../middlewares/validator.js"
import passport from "../middlewares/passport.js"
import one from "../controllers/chapters/get_one.js"
import get_chapters from "../controllers/chapters/get_chapters.js"

let router = Router()

router.get("/", read)
router.get("/get", get_chapters)
router.get("/:_id", one)

router.post("/chapter-form",passport.authenticate("jwt",{session:false}),validator(createChapter),authorizedRole,create)

export default router
