import { Router } from "express"
import reaction from "../controllers/reactions/reactions_post.js"
import reactionDelete from "../middlewares/reactions_delete.js"
import get_reaction from "../controllers/reactions/get_reactions.js"
import passport from "passport"

let router = Router()

router.post('/', passport.authenticate('jwt', { session: false }), reactionDelete, reaction)
router.get('/', passport.authenticate('jwt', { session: false }), get_reaction)

export default router