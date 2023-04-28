import express from 'express';
import create from "../controllers/auths/create.js"

const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/admins', (req, res, next)=> res.status(200).json({
  success: true,
  admins: []
}))

router.post("/signup",  create)


export default router
