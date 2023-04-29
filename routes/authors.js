import { Router } from "express"
import read from "../controllers/authors/read.js"
import create from "../controllers/authors/create.js"
let router = Router()

router.get("/", read)
router.post("/", create)

export default router
