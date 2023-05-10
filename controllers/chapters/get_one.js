import Chapter from "../../models/Chapter.js" ;
import createHttpError from "http-errors"

let read = async (req, res, next) => {  
    let { _id } = req.params

    try {
        let chapter = await Chapter.findById(_id)

    if (!chapter) {
        return next(createHttpError(404, "El capítulo no se encontró"))
    }
    
    let mangaId = chapter.manga_id

    let all = await Chapter.find({ manga_id: mangaId } , "title pages")
    
    if (all.length > 0) {
        return res.status(200).json({
        chapters: all
        })
    }
    
    return next(createHttpError(404, "No se encontraron otros capítulos para este manga"))
    
    } catch (error) {
        console.log(error)
        next(error)
    }
}

export default read
