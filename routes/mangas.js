// Se definen los endpoints de los mangas
// y se exportan para poder utilizarlos en el enrutador PRINCIPAL
import { Router } from "express"
import read from "../controllers/mangas/read.js"
import create from "../controllers/mangas/create.js"
let router = Router()

router.get("/", read)
router.post('/', create)

/* router.get('/', function(req,res,next) {
    res.send('respond with a resource')
})

router.get("/mangas",(req, res, next)=>res.status(201).json({
    succes:true,
    admins: []
}))
 */
export default router

