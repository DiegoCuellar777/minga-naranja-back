
import express from 'express';
import userRouter from "./users.js"
import authorRouter from "./authors.js"
import categoryRouter from "./categories.js"
import companyRouter from "./companies.js"
import chapterRouter from "./chapters.js"
import mangaRouter from "./mangas.js"
import carouselRouter from "./carousels.js"

import conectedEndpoint from '../middlewares/conectedEndpoint.js';

const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'MINGA API',
    subtitle: "Endpoints of Minga"
  });
});

router.use("/auth", conectedEndpoint, userRouter)
router.use("/api/authors", conectedEndpoint, authorRouter)
router.use("/categories", conectedEndpoint, categoryRouter)
router.use("/companies", conectedEndpoint, companyRouter)
router.use("/mangas", conectedEndpoint, mangaRouter)
router.use("/chapters", conectedEndpoint, chapterRouter)
router.use("/carousels", conectedEndpoint, carouselRouter)

export default router
