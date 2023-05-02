
import express from 'express';
import userRouter from "./auth.js"
import authorRouter from "./authors.js"
import categoryRouter from "./categories.js"
import companyRouter from "./companies.js"
import chapterRouter from "./chapters.js"
import mangaRouter from "./mangas.js"
import carouselRouter from "./carousels.js"

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'MINGA API',
    subtitle: "Endpoints of Minga"
});
});

const midd1 = (req, res, next) =>{
  console.log("Solo estoy en categories")
  next()
}

router.use("/auth", userRouter)
router.use("/authors", authorRouter)
router.use("/categories", midd1, categoryRouter)
router.use("/companies", companyRouter)
router.use("/mangas", mangaRouter)
router.use("/chapters", chapterRouter)
router.use("/carousels", carouselRouter)

export default router
