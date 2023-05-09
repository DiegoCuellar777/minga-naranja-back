import MangaModel from '../../models/Manga.js' 

let read = async(req, res, next)=> {
    let queries = {}
    let pagination = {
        limit: 2,
        page: 1
    } 
    
    if(req.query.title) {
        queries.title = new RegExp(req.query.title.trim(),'i')
    }
    if(req.query.category_id) {
        queries.category_id = req.query.category_id
    }
    if(req.query.author_id) {
        queries.author_id = req.query.author_id
    }
 /*    if(req.query.order) {
        sort.title = req.query.order
    } */
    //queries.author_id = queries.author_id ?? ''
    //queries.order = queries.order ?? 1 
    //queries.category_id = queries.category_id ?? ''
    // por default 1 ordena de menor a mayor
    // por default -1 ordena de mayor a menor

    try {
        let all = await MangaModel.find(queries)
        return res.status(200).json({
            succes: true,
            response: all
        })
    } catch (error) {
        next (error)
    }
}

export default read